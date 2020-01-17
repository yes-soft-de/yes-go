import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserConfig} from '../../UserConfig';
import {Observable} from 'rxjs';
import {CustomerListResponse} from '../response/customer-list-response';

@Injectable({
  providedIn: 'root'
})
export class CustomerRepositoryService {

  constructor(private httpClient: HttpClient) { }

  // Get All Customers
  getCustomers(): Observable<CustomerListResponse> {
    return this.httpClient.get<CustomerListResponse>(`${UserConfig.customersAPI}`);
  }

}
