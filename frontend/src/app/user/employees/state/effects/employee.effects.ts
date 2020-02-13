import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { EmployeeService } from '../../service/employee.service';
import * as employeeActions from '../actions/employee.actions';
import { of } from 'rxjs';

@Injectable()
export class EmployeeEffects {

    constructor(
        private employeeService: EmployeeService, 
        private actions$: Actions) {}


    // load Employees Effects For Connecting With APi
    EmployeesEffect$ = createEffect(() => this.actions$.pipe(
        ofType(employeeActions.EmployeeActionsType.LOAD_EMPLOYEES),
        mergeMap(
            () => this.employeeService.getEmployees()
            .pipe(
                map(employeesList => {
                    return new employeeActions.LoadEmployeesSuccess(employeesList);
                }),
                catchError((error) => of(new employeeActions.LoadEmployeesFailed(error)))
            ))
        )
    );

    // Load Employee Details Effects For Connecting With API 
    EmployeeEffect$ = createEffect(() => this.actions$.pipe(
        ofType(employeeActions.EmployeeActionsType.LOAD_EMPLOYEE),
        mergeMap(
            (action: employeeActions.LoadEmployee) => this.employeeService.getEmployee(action.payload)
            .pipe(
                map((employeeDetail) => new employeeActions.LoadEmployeeSuccess(employeeDetail)),
                catchError((error) => of(new employeeActions.LoadEmployeesFailed(error)))
            ))
        )
    );
    
}