import { Injectable } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as customerAction from '../actions/customer.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable()
export class CustomerEffects {
    constructor(
        private customerService: CustomerService,
        private actions$: Actions) {}
      
    // load Employees Effects For Connecting With APi
    CustomersEffect$ = createEffect(() => this.actions$.pipe(
      ofType(customerAction.customerActionsType.LOAD_CUSTOMERS),
      mergeMap(
          () => this.customerService.getCustomers()
          .pipe(
              map(customersList => {
                  return new customerAction.LoadCustomersSuccess(customersList);
              }),
              catchError((error) => of(new customerAction.LoadCustomersFailed(error)))
          ))
      )
  );
  
}