import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Store} from '@ngrx/store';
import {UserState} from '../../store/app-state';
import {Observable, of} from 'rxjs';
import {catchError, filter, switchMap, take, tap} from 'rxjs/operators';
import {getEmployeesLoadedSelector} from '../store/reducer/employee.reducer';
import {LoadEmployees} from '../store/actions/employee.actions';

@Injectable()
export class EmployeesGuard implements CanActivate {

  constructor(private store: Store<UserState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    // display employees loaded selector
    return this.store.select(getEmployeesLoadedSelector).pipe(
      tap(loaded => {
        if (!loaded) {
          // Dispatch new load employee if not loaded
          this.store.dispatch(new LoadEmployees());
        }
      }),
      // Filter The Response Loaded To The True Loaded
      filter(loaded => loaded),
      take(1)
    );
  }
}
