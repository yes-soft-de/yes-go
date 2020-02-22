import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { EmployeeList } from '../../entity/employee-list';
import { Store, select } from '@ngrx/store';
import { UserState } from 'src/app/user/store/app-state';
import * as employeeAction from '../../store/actions/employee.actions';
import { getEmployeesSelector } from '../../store/reducer/employee.reducer';
import { HelperService } from 'src/app/user/shared/helper/helper.service';
import { getCustomerCommentsSelector } from 'src/app/user/customers/store/reducers/customer-comments.reducer';
import { EmployeeCustomerCommentsActionsType, LoadEmployeeCustomerComments } from 'src/app/user/customers/store/actions/customer-comments.actions';
import { EmployeeCustomerComments } from 'src/app/user/customers/entity/employee-customer-comments';
import { EmployeeProjects } from '../../entity/employee-projects';
import { LoadEmployeeProjects } from '../../store/actions/employee-projects.actions';
import { getEmployeeProjectsSelector } from '../../store/reducer/employee-projects.reducer';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeeList: EmployeeList[];
  employees: any = [[]];            // Empty Array To Use It With Employee Carousel
  selectedEmployee: any;
  employeeCustomerComments: EmployeeCustomerComments[];
  employeeProjectsList: EmployeeProjects[];
  employeeProjectsCarousel: any = [[]];


  constructor(private store: Store<UserState>) { }

  ngOnInit() {
    // Dispatch Loading Employee
    this.store.dispatch(new employeeAction.LoadEmployees());
    // Select only employee Array and subscribe it
    this.store.pipe(select(getEmployeesSelector)).subscribe(
      employeeList => {
        this.employeeList = employeeList;
        console.log(employeeList);
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
      // Dispatch for Loading Customer Comments
      this.store.dispatch(new LoadEmployeeCustomerComments(employee.id));
      this.store.select(getCustomerCommentsSelector).subscribe(
        customerComments => this.employeeCustomerComments = customerComments
      );

      // Dispatch our Loading Employee Projects Action
      this.store.dispatch(new LoadEmployeeProjects(employee.id));
      this.store.select(getEmployeeProjectsSelector).subscribe(
        customerProjects => {
          this.employeeProjectsList = customerProjects;
          this.employeeProjectsCarousel = HelperService.chunk(customerProjects, this.onResize());          
        }
      );


    }

    onRate(event) {

    }
}
