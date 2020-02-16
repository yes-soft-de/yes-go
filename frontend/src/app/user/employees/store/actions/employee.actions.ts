import { Action } from '@ngrx/store';
import { EmployeeList } from '../../entity/employee-list';
import { EmployeeDetail } from '../../entity/employee-detail';

export enum EmployeeActionsType {
    LOAD_EMPLOYEES = 'Load Employees',
    LOAD_EMPLOYEES_SUCCESS = 'Load Employees Success',
    LOAD_EMPLOYEES_FAILED = 'Load Employees Failed',
    LOAD_EMPLOYEE = 'Load Employee',
    LOAD_EMPLOYEE_SUCCESS = 'Load Employee Success',
    LOAD_EMPLOYEE_FAILED = 'Load Employee Failed'
}


// Create Employees Loading Actions
export class LoadEmployees implements Action {
    readonly type = EmployeeActionsType.LOAD_EMPLOYEES;
  }
  
  // Create Employees Success Loading Actions
  export class LoadEmployeesSuccess implements Action {
    readonly type = EmployeeActionsType.LOAD_EMPLOYEES_SUCCESS;
    constructor(public payload: EmployeeList[]) {}
  }
  
  // Create Employees Failed Loading Actions
  export class LoadEmployeesFailed implements Action {
    readonly type = EmployeeActionsType.LOAD_EMPLOYEES_FAILED;
    constructor(public payload: string) {}
  }

// Create Employee Loading Actions
export class LoadEmployee implements Action {
  readonly type = EmployeeActionsType.LOAD_EMPLOYEE;
  constructor(public payload: number) {}
}

// Create Employee Success Loading Actions
export class LoadEmployeeSuccess implements Action {
  readonly type = EmployeeActionsType.LOAD_EMPLOYEE_SUCCESS;
  constructor(public payload: EmployeeDetail) {}
}

// Create Employee Failed Loading Actions
export class LoadEmployeeFailed implements Action {
  readonly type = EmployeeActionsType.LOAD_EMPLOYEE_FAILED;
  constructor(public payload: string) {}
}


  
  
  export type action =
    | LoadEmployees
    | LoadEmployeesSuccess
    | LoadEmployeesFailed
    | LoadEmployee
    | LoadEmployeeSuccess
    | LoadEmployeeFailed;
    
  