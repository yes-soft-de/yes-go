import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserConfig} from '../../UserConfig';
import {Observable} from 'rxjs';
import {CustomerListResponse} from '../response/customer-list-response';
import {delay, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerRepositoryService {

  constructor(private httpClient: HttpClient) { }

  // Get All Customers
  getCustomers(): Observable<CustomerListResponse> {
    return this.httpClient.get<CustomerListResponse>(`${UserConfig.customersAPI}`).pipe(
      retry(6),
      delay(1000)
    );
  }


  // Get Customer Details
  getCustomer(customerId: number): Observable<any> {
    return this.httpClient.get<any>(`${UserConfig.customerAPI}/${customerId}`).pipe(
      retry(6),
      delay(1000)
    );
  }

}
