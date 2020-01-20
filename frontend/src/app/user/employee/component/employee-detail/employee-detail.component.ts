import {Component, OnInit} from '@angular/core';
import {StarRatingComponent} from 'ng-starrating';
import {EmployeeService} from '../../service/employee.service';
import {EmployeeDetail} from '../../entity/employee-detail';
import {ActivatedRoute, ParamMap, Route} from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss', '../employee-short-detail/employee-short-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  employeeDetails: EmployeeDetail;

  constructor(private employeeService: EmployeeService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.url.subscribe(
      urlSegments => {
        this.employeeService.getEmployee(Number(urlSegments[1].path)).subscribe(
          employeeDetails => {
            this.employeeDetails = employeeDetails;
            console.log('employeeDetails', employeeDetails);
          }
        );
      }
    );
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
