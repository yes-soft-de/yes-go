import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import * as customerCommentsActions from '../actions/customer-comments.actions';
import { CustomerService } from '../../service/customer.service';


@Injectable()
export class EmployeeCustomerCommentsEffects {

    constructor(
        private customerService: CustomerService,
        private actions$: Actions) {}


    // Load Employee Customer Comments For Connecting With API
    EmployeeCustomerCommentsEffect$ = createEffect(() => this.actions$.pipe(
        ofType(customerCommentsActions.EmployeeCustomerCommentsActionsType.LOAD_EMPLOYEE_CUSTOMER_COMMENTS),
        mergeMap(
            (action: customerCommentsActions.LoadEmployeeCustomerComments) => this.customerService.getEmployeeCustomerComments(action.payload)
            .pipe(
                map((employeeCustomerComments) => new customerCommentsActions.LoadEmployeeCustomerCommentsSuccess(employeeCustomerComments)),
                catchError((error) => of(new customerCommentsActions.LoadEmployeeCustomerCommentsFailed(error)))
            )
        )
    )); 

    
}