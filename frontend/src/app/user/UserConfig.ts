export class UserConfig {
  // General Source
  public static sourceAPI = '/backend/public/';

  // Search API
  public static searchAPI = UserConfig.sourceAPI + 'search';

  // Employee API
  public static employeesAPI = UserConfig.sourceAPI + 'employees';
  public static employeeAPI = UserConfig.sourceAPI + 'employee';
  public static employeeProjectsAPI = UserConfig.sourceAPI + 'employeeprojects';

  // Customer API
  public static customersAPI = UserConfig.sourceAPI + 'customers';
  public static customerAPI = UserConfig.sourceAPI + 'customer';
  public static customerCommentsAPI = UserConfig.sourceAPI + 'employeecomments';
}
