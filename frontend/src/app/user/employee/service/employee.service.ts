import { Injectable } from '@angular/core';
import {EmployeeManagerService} from '../manager/employee-manager.service';
import {EMPTY, Observable, Subject} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {EmployeeList} from '../entity/employee-list';
import {EmployeeDetail} from '../entity/employee-detail';
import {EmployeeCustomerComments} from '../entity/employee-customer-comments';
import {EmployeeProjects} from '../entity/employee-projects';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeListSubject = new Subject<EmployeeList[]>();
  private employeeDetailsSubject = new Subject<EmployeeDetail>();
  private employeeCustomerCommentsSubject = new Subject<EmployeeCustomerComments[]>();
  private employeeProjectsSubject = new Subject<EmployeeProjects[]>();

  constructor(private employeeManagerService: EmployeeManagerService) { }

  // Fetch All Employees
  getEmployees(): Observable<EmployeeList[]> {
    this.employeeManagerService.getEmployees()
      .pipe(catchError(error => {
          this.employeeListSubject.error('Error Fetching Employee');
          return EMPTY;
        }))
      .subscribe(
      employeesResponse => {
          this.employeeListSubject.next(employeesResponse.Data);
        }
      );
    return this.employeeListSubject.asObservable();
  }


  // Fetch Employee Details
  getEmployee(employeeId: number): Observable<EmployeeDetail> {
    this.employeeManagerService.getEmployee(employeeId)
      .pipe(catchError(error => {
        this.employeeDetailsSubject.error('Error Fetching Employee Details');
        return EMPTY;
      }))
      .subscribe(
        employeeDetailsResponse => {
          this.employeeDetailsSubject.next(employeeDetailsResponse.Data);
        }
      );
    return this.employeeDetailsSubject.asObservable();
  }

  // Get Customer Comments about employee
  getEmployeeCustomerComments(empoyeeId: number): Observable<EmployeeCustomerComments[]> {
    this.employeeManagerService.getEmployeeCustomerComments(empoyeeId)
      .pipe(catchError(error => {
        this.employeeCustomerCommentsSubject.error('Error Fetching What Customer Says About Employee');
        return EMPTY;
      }))
      .subscribe(
        employeeCustomerCommentsResponse => {
          // reverse the data
          this.employeeCustomerCommentsSubject.next(employeeCustomerCommentsResponse.Data.reverse());
        }
      );
    return this.employeeCustomerCommentsSubject.asObservable();
  }

  // Get Employee Projects
  getEmployeeProjects(employeeId: number): Observable<EmployeeProjects[]> {
    this.employeeManagerService.getEmployeeProjects(employeeId)
      .pipe(catchError(error => {
        this.employeeProjectsSubject.error('Error Fetching Employee Projects');
        return EMPTY;
      }))
      .subscribe(
        employeeProjectsResponse => {
          this.employeeProjectsSubject.next(employeeProjectsResponse.Data);
        }
      );
    return this.employeeProjectsSubject.asObservable();
  }
}
