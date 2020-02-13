import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerList } from '../entity/customer-list';
import { UserConfig } from '../../UserConfig';
import { retry, delay } from 'rxjs/operators';
import { EmployeeCustomerComments } from '../entity/employee-customer-comments';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }
  
  // Get All Customers
  getCustomers(): Observable<CustomerList[]> {
    return this.httpClient.get<CustomerList[]>(`${UserConfig.customersAPI}`).pipe(
      retry(6),
      delay(1000)
    );
  }

  // Get Customer Comments About Employee
  getEmployeeCustomerComments(employeeId: number): Observable<EmployeeCustomerComments[]> {
    return this.httpClient.get<EmployeeCustomerComments[]>(`${UserConfig.customerCommentsAPI}/${employeeId}`).pipe(
      retry(6),
      delay(1000)
    );
  }


}
