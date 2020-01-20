import { Injectable } from '@angular/core';
import {EmployeeRepositoryService} from '../repository/employee-repository.service';
import {Observable} from 'rxjs';
import {EmployeeListResponse} from '../response/employee-list-response';
import {EmployeeDetailResponse} from '../response/employee-detail-response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeManagerService {

  constructor(private employeeRepositoryService: EmployeeRepositoryService) { }

  // Fetch All Employees
  getEmployees(): Observable<EmployeeListResponse> {
    return this.employeeRepositoryService.getEmployees();
  }

  // Fetch Employee Details
  getEmployee(employeeId: number): Observable<EmployeeDetailResponse> {
    return this.employeeRepositoryService.getEmployee(employeeId);
  }
}
