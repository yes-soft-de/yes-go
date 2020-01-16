import {Component, Input, OnInit} from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import {Employee} from '../../entity/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee: Employee;
  constructor() { }

  ngOnInit() {
    console.log(this.employee);
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
