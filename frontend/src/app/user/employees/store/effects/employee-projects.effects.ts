import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { EmployeeService } from '../../service/employee.service';
import * as employeeProjectsActions from '../actions/employee-projects.actions';
import { of } from 'rxjs';
import { EmployeeProjects } from '../../entity/employee-projects';

@Injectable()
export class EmployeeProjectsEffects {

    constructor(
        private employeeService: EmployeeService,
        private actions$: Actions) {}


    // Load Employee Projects Effects For Connecting With API
    EmployeeProjectsEffect$ = createEffect(() => this.actions$.pipe(
        ofType(employeeProjectsActions.EmployeeActionsType.LOAD_EMPLOYEE_PROJECTS),
        mergeMap(
            (action: employeeProjectsActions.LoadEmployeeProjects) => this.employeeService.getEmployeeProjects(action.payload)
            .pipe(
                map((employeeProjectsRes: EmployeeProjects[]) => new employeeProjectsActions.LoadEmployeeProjectsSuccess(employeeProjectsRes)),
                catchError((error) => of(new employeeProjectsActions.LoadEmployeeProjectsFailed(error)))
            ))
        )
    );

}
