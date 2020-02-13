import {Component, HostListener, OnInit} from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import {EmployeeList} from '../../entity/employee-list';
import {EmployeeDetail} from '../../entity/employee-detail';
import {HelperService} from '../../../shared/helper/helper.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeesList: EmployeeList[];    // Store All Employee
  employees: any = [[]];            // Empty Array To Use It With Employee Carousel
  selectedEmployee: EmployeeDetail;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    // Fetch All Employees
    this.employeeService.getEmployees()
      .subscribe(
      employeesList => {
        this.employeesList = employeesList;
        console.log('employee: ', this.employeesList);
        this.employees = HelperService.chunk(employeesList, this.onResize());
        // Select First Element From Our Array
        this.onSelected(employeesList[0]);
      }
    );
  }

  // Host For Fetch Screen Size And Change The Chunk Array Size
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    const screenWidth = window.innerWidth;
    let chunkSize = 4;      // make 4 chunk In every array
    if (screenWidth >= 768 && screenWidth <= 992) {
      chunkSize = 3;        // make 3 chunk In every array
    } else if (screenWidth >= 576 && screenWidth <= 767) {
      chunkSize = 2;        // make 2 chunk In every array
    } else if (screenWidth <= 575) {
      chunkSize = 1;        // make 1 chunk In every array
    }
    return chunkSize;
  }

  // Select Our Employee And Fetch His Detail
  onSelected(employee: EmployeeList) {
    this.selectedEmployee = employee;
  }

}
