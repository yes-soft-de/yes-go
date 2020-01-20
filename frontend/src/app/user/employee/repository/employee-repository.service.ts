import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserConfig} from '../../UserConfig';
import {Observable} from 'rxjs';
import {EmployeeListResponse} from '../response/employee-list-response';
import {EmployeeDetailResponse} from '../response/employee-detail-response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRepositoryService {

  constructor(private httpClient: HttpClient) { }

  // Fetch All Employees
  getEmployees(): Observable<EmployeeListResponse> {
    return this.httpClient.get<EmployeeListResponse>(`${UserConfig.employeesAPI}`);
  }

  // Fetch Employee Details
  getEmployee(employeeId: number): Observable<EmployeeDetailResponse> {
    return this.httpClient.get<EmployeeDetailResponse>(`${UserConfig.employeeAPI}/${employeeId}`);
  }

}
