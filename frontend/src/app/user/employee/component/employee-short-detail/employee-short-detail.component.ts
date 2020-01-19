import {Component, Input, OnInit} from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import {EmployeeDetail} from '../../entity/employee-detail';

@Component({
  selector: 'app-employee-short-detail',
  templateUrl: './employee-short-detail.component.html',
  styleUrls: ['./employee-short-detail.component.scss']
})
export class EmployeeShortDetailComponent implements OnInit {
  @Input() employee: EmployeeDetail;

  constructor() {
  }

  ngOnInit() {}

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}