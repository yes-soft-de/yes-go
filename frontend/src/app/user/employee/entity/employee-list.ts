export class EmployeeList {
  id: number;
  fullName: string;
  position: string;
  language: string;
  image: string;
  experiances: string;
  details: string;
  isAvilable: boolean;
  facebook: string;
  twitter: string;
  linkedin: string;
  gmail: string;
  birthDate: {
    timezone: {name: string},
    timestamp: number
  };
  joiningDate: {
    timezone: {name: string},
    timestamp: number
  };
  skills: string;
}
