import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserConfig} from '../../UserConfig';
import {Observable} from 'rxjs';
import {EmployeeListResponse} from '../response/employee-list-response';
import {EmployeeDetailResponse} from '../response/employee-detail-response';
import {delay, retry} from 'rxjs/operators';
import {EmployeeCustomerCommentsResponse} from '../response/employee-customer-comments-response';
import {EmployeeProjectsResponse} from '../response/employee-projects-response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRepositoryService {

  constructor(private httpClient: HttpClient) { }

  // Fetch All Employees
  getEmployees(): Observable<EmployeeListResponse> {
    return this.httpClient.get<EmployeeListResponse>(`${UserConfig.employeesAPI}`).pipe(
      retry(6),
      delay(1000)
    );
  }

  // Fetch Employee Details
  getEmployee(employeeId: number): Observable<EmployeeDetailResponse> {
    return this.httpClient.get<EmployeeDetailResponse>(`${UserConfig.employeeAPI}/${employeeId}`).pipe(
      retry(6),
      delay(1000)
    );
  }

  // Get Customer Comments about employee
  getEmployeeCustomerComments(employeeId: number): Observable<EmployeeCustomerCommentsResponse> {
    return this.httpClient.get<EmployeeCustomerCommentsResponse>(`${UserConfig.customerCommentsAPI}/${employeeId}`).pipe(
      retry(6),
      delay(1000)
    );
  }

  // Get Employee Projects
  getEmployeeProjects(employeeId: number): Observable<EmployeeProjectsResponse> {
    return this.httpClient.get<EmployeeProjectsResponse>(`${UserConfig.employeeProjectsAPI}/${employeeId}`).pipe(
      retry(6),
      delay(1000)
    );
  }
}
