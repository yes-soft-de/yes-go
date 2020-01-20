import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CustomerRepositoryService} from '../repository/customer-repository.service';
import {CustomerListResponse} from '../response/customer-list-response';

@Injectable({
  providedIn: 'root'
})
export class CustomerManagerService {

  constructor(private customerRepositoryService: CustomerRepositoryService) { }

  // Get All Customers
  getAllCustomers(): Observable<CustomerListResponse> {
    return this.customerRepositoryService.getCustomers();
  }

}
