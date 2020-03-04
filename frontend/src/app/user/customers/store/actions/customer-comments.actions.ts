import { Action } from '@ngrx/store';

export enum EmployeeCustomerCommentsActionsType {
    LOAD_EMPLOYEE_CUSTOMER_COMMENTS = 'Load Employee Customer Comments',
    LOAD_EMPLOYEE_CUSTOMER_COMMENTS_SUCCESS = 'Load Employee Customer Comments Success',
    LOAD_EMPLOYEE_CUSTOMER_COMMENTS_FAILED = 'Load Employee Customer Comments Failed'
}


// Create Employee Customer Comments Loading Actions
export class LoadEmployeeCustomerComments implements Action {
  readonly type = EmployeeCustomerCommentsActionsType.LOAD_EMPLOYEE_CUSTOMER_COMMENTS;
  constructor(public payload: number) {}
}

// Create Employee Customer Comments Success Loading Actions
export class LoadEmployeeCustomerCommentsSuccess implements Action {
  readonly type = EmployeeCustomerCommentsActionsType.LOAD_EMPLOYEE_CUSTOMER_COMMENTS_SUCCESS;
  constructor(public payload: any) {}
}

// Create Employee Customer Comments Failed Loading Actions
export class LoadEmployeeCustomerCommentsFailed implements Action {
  readonly type = EmployeeCustomerCommentsActionsType.LOAD_EMPLOYEE_CUSTOMER_COMMENTS_FAILED;
  constructor(public payload: string) {}
}

  
  
export type action =
  | LoadEmployeeCustomerComments
  | LoadEmployeeCustomerCommentsSuccess
  | LoadEmployeeCustomerCommentsFailed;
    
