import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {Store} from '@ngrx/store';
import {UserState} from '../../store/app-state';
import {Observable} from 'rxjs';
import {getEmployeesEntities, getEmployeesLoadedSelector} from '../store/reducer/employee.reducer';
import {filter, map, switchMap, take, tap} from 'rxjs/operators';
import {LoadEmployees} from '../store/actions/employee.actions';
import {EmployeeDetail} from '../entity/employee-detail';

@Injectable()
export class EmployeeExistGuard implements CanActivate {

  constructor(private store: Store<UserState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params.id, 10);
        return this.hasEmployee(id)
      })
    );
  }

  // Return specific Employee Dependent on The Id
  hasEmployee(id: number): Observable<boolean> {
    return this.store.select(getEmployeesEntities)
      .pipe(
      map((entities: {[key: number]: EmployeeDetail}) => {
        return !!entities[id];
      }),
      take(1)
    );
  }


  // Check The Store If The Employee Loaded
  checkStore(): Observable<boolean> {
    return this.store.select(getEmployeesLoadedSelector).pipe(
      tap(loaded => {
        if (!loaded) {
          // Dispatch New Loaded If Not Loaded
          this.store.dispatch(new LoadEmployees());
        }
      }),
      // Filter The Response Loaded To The True Loaded
      filter(loaded => loaded),
      take(1)
    );
  }
}
