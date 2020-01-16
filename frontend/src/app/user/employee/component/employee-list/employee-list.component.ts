import { Component, OnInit } from '@angular/core';
import {EMPLOYEE} from '../../entity/employee-mock';
import {Employee} from '../../entity/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: any = [[]];
  selectedEmployee: Employee;

  constructor() { }

  ngOnInit() {
    this.employees = this.chunk(EMPLOYEE, 4);
  }

  // create chunk of paintings array to use it in painting carousel
  chunk(paintingsArr, chunkSize) {
    const arr = [];
    for (let i = 0, len = paintingsArr.length; i < len; i += chunkSize) {
      arr.push(paintingsArr.slice(i, i + chunkSize));
    }
    return arr;
  }

  onSelected(employee: Employee) {
    this.selectedEmployee = employee;
  }

}
