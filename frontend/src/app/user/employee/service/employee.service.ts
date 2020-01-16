import { Injectable } from '@angular/core';
import {EmployeeManagerService} from '../manager/employee-manager.service';
import {EMPTY, Observable, Subject} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {EmployeeList} from '../entity/employee-list';
import {EmployeeDetail} from '../entity/employee-detail';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeListSubject = new Subject<EmployeeList[]>();
  private employeeDetailsSubject = new Subject<EmployeeDetail>();

  constructor(private employeeManagerService: EmployeeManagerService) { }

  // Fetch All Employees
  getEmployees(): Observable<EmployeeList[]> {
    this.employeeManagerService.getEmployees()
      .pipe(catchError(error => {
        this.employeeListSubject.error('Error Fetching Employees');
        return EMPTY;
      })).subscribe(
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
}
