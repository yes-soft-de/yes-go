import { Injectable } from '@angular/core';
import {EmployeeRepositoryService} from '../repository/employee-repository.service';
import {Observable} from 'rxjs';
import {EmployeeListResponse} from '../response/employee-list-response';
import {EmployeeDetailResponse} from '../response/employee-detail-response';
import {EmployeeCustomerCommentsResponse} from '../response/employee-customer-comments-response';
import {EmployeeProjectsResponse} from '../response/employee-projects-response';

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

  // Get Customer Comments about employee
  getEmployeeCustomerComments(employeeId: number): Observable<EmployeeCustomerCommentsResponse> {
    return this.employeeRepositoryService.getEmployeeCustomerComments(employeeId);
  }

  // Get Employee Projects
  getEmployeeProjects(employeeId: number): Observable<EmployeeProjectsResponse> {
    return this.employeeRepositoryService.getEmployeeProjects(employeeId);
  }
}
