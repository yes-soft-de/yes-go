export interface EmployeeCustomerComments {
  id?: number;
  body: string;
  date: {
    timezone: {name: string},
    timestamp: number
  };
  details: string;
  clientName: string;
  image: string;
}
