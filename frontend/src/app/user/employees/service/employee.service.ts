import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeList } from '../entity/employee-list';
import { UserConfig } from '../../UserConfig';
import { retry, delay } from 'rxjs/operators';
import { EmployeeDetail } from '../entity/employee-detail';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  // Get All Employees
  getEmployees(): Observable<EmployeeList[]> {
    return this.httpClient.get<EmployeeList[]>(`${UserConfig.employeesAPI}`).pipe(
      retry(6),
      delay(1000)
    );
  }


  // Fetch Employee Details
  getEmployee(employeeId: number): Observable<EmployeeDetail> {
    return this.httpClient.get<EmployeeDetail>(`${UserConfig.employeeAPI}/${employeeId}`).pipe(
      retry(6),
      delay(1000)
    );
  }

  // Get Employee Projects
  getEmployeeProjects(employeeId: number) {
    return this.httpClient.get(`${UserConfig.employeeProjectsAPI}/${employeeId}`).pipe(
      retry(6),
      delay(1000)
    );
  }
}
