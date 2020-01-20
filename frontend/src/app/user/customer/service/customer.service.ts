import { Injectable } from '@angular/core';
import {EMPTY, Observable, Subject} from 'rxjs';
import {CustomerManagerService} from '../manager/customer-manager.service';
import {catchError} from 'rxjs/operators';
import {CustomerListResponse} from '../response/customer-list-response';
import {CustomerList} from '../entity/customer-list';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersListSubject = new Subject<CustomerList[]>();

  constructor(private customerManagerService: CustomerManagerService) { }

  getAllCustomers(): Observable<CustomerList[]> {
    this.customerManagerService.getAllCustomers()
      .pipe(catchError(error => {
        this.customersListSubject.error('Error Fetching Customers');
        return EMPTY;
      }))
      .subscribe(
        customersListResponse => {
          this.customersListSubject.next(customersListResponse.Data);
        }
      );
    return this.customersListSubject.asObservable();
  }

}
