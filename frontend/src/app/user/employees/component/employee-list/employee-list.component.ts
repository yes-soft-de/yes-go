import { Component, OnInit, HostListener } from '@angular/core';
import { EmployeeList } from '../../entity/employee-list';
import { Store, select } from '@ngrx/store';
import { UserState } from 'src/app/user/store/app-state';
import * as employeeAction from '../../store/actions/employee.actions';
import { getEmployeesSelector } from '../../store/reducer/employee.reducer';
import { HelperService } from 'src/app/user/shared/helper/helper.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeeList$: EmployeeList[];
  employees: any = [[]];            // Empty Array To Use It With Employee Carousel
  selectedEmployee: any;


  constructor(private store: Store<UserState>) { }

  ngOnInit() {
    // Dispatch Loading Employee
    this.store.dispatch(new employeeAction.LoadEmployees());
    // Select only employee Array and subscribe it
    this.store.pipe(select(getEmployeesSelector)).subscribe(
      employeeList => {
        this.employeeList$ = employeeList;
        this.employees = HelperService.chunk(employeeList, this.onResize());
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
