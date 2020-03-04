import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from '../../store/app-state';
import { Observable, of } from 'rxjs';
import { customersLoadedSuccessSelector } from '../store/reducers/customer.reducer';
import { LoadCustomers } from '../store/actions/customer.actions';
import { filter, tap, take, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class CustomersGuards implements CanActivate {

    constructor(private store: Store<UserState>) {}

    canActivate(): Observable<boolean> {
        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    // Check Store If Customers Loaded
    checkStore(): Observable<boolean> {
        return this.store.select(customersLoadedSuccessSelector).pipe(
            tap(loaded => {
                if(!loaded) {
                    this.store.dispatch(new LoadCustomers());
                }
            }),
            // Filter The Response Loaded To The True Loaded
            filter(loaded => loaded),
            take(1)
        );
    }
}
