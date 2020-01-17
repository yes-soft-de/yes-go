export class UserConfig {
  // General Source
  public static sourceAPI = '/backend/public/';

  // Employee API
  public static employeesAPI = UserConfig.sourceAPI + 'employees';
  public static employeeAPI = UserConfig.sourceAPI + 'employee';

  // Customer API
  public static customersAPI = UserConfig.sourceAPI + 'customers';
  public static customerAPI = UserConfig.sourceAPI + 'customer';
}
