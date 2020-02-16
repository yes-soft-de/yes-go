import { Action } from '@ngrx/store';
import { EmployeeProjects } from '../../entity/employee-projects';

export enum EmployeeActionsType {
    LOAD_EMPLOYEE_PROJECTS = 'Load Employee Projects',
    LOAD_EMPLOYEE_PROJECTS_SUCCESS = 'Load Employee Projects Success',
    LOAD_EMPLOYEE_PROJECTS_FAILED = 'Load Employee Projects Failed'
}


// Create Employee Projects Loading Actions
export class LoadEmployeeProjects implements Action {
  readonly type = EmployeeActionsType.LOAD_EMPLOYEE_PROJECTS;
  constructor(public payload: number) {}
}

// Create Employee Projects Success Loading Actions
export class LoadEmployeeProjectsSuccess implements Action {
  readonly type = EmployeeActionsType.LOAD_EMPLOYEE_PROJECTS_SUCCESS;
  constructor(public payload: any) {}
}

// Create Employee Projects Failed Loading Actions
export class LoadEmployeeProjectsFailed implements Action {
  readonly type = EmployeeActionsType.LOAD_EMPLOYEE_PROJECTS_FAILED;
  constructor(public payload: string) {}
}

  
export type action =
  | LoadEmployeeProjects
  | LoadEmployeeProjectsSuccess
  | LoadEmployeeProjectsFailed;
    
  