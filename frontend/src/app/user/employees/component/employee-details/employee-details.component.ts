import { Component, OnInit, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { StarRatingComponent } from 'ng-starrating';
import { EmployeeDetail } from '../../entity/employee-detail';
import { EmployeeCustomerComments } from '../../../customers/entity/employee-customer-comments';
import { EmployeeProjects } from '../../entity/employee-projects';
import * as employeeAction from '../../store/actions/employee.actions';
import * as employeeCustomerCommentsAction from '../../../customers/store/actions/customer-comments.actions';
import * as employeeProjectsActions from '../../store/actions/employee-projects.actions';
import { UserState } from 'src/app/user/store/app-state';
import { getCustomerCommentsSelector } from 'src/app/user/customers/store/reducers/customer-comments.reducer';
import { Observable } from 'rxjs';
import { getEmployeeRoutingSelector } from '../../store/reducer/employee.reducer';
import { getEmployeeProjectsSelector } from '../../store/reducer/employee-projects.reducer';
import { HelperService } from 'src/app/user/shared/helper/helper.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss', '../employee-short-detail/employee-short-detail.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeDetails: EmployeeDetail;
  employeeCustomerComments$: Observable<EmployeeCustomerComments[]>;
  employeeProjectsList: EmployeeProjects[];
  employeeProjectsCarousel: any = [[]];

  constructor(
    private store: Store<UserState>) { }

  ngOnInit() {
    this.store.select(getEmployeeRoutingSelector).subscribe(
      employeeDetail => this.employeeDetails = employeeDetail
    );

    // Dispatch our Loading Employee Customer Comments Action
    this.store.dispatch(new employeeCustomerCommentsAction.LoadEmployeeCustomerComments(this.employeeDetails.id));
    this.employeeCustomerComments$ = this.store.select(getCustomerCommentsSelector);

    // Dispatch our Loading Employee Projects Action
    this.store.dispatch(new employeeProjectsActions.LoadEmployeeProjects(this.employeeDetails.id));
    this.store.select(getEmployeeProjectsSelector).subscribe(
      customerProjects => {
        this.employeeProjectsList = customerProjects;
        this.employeeProjectsCarousel = HelperService.chunk(customerProjects, this.onResize());
      }
    );

  }


  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }


  // Host For Fetch Screen Size And Change The Chunk Array Size
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    const screenWidth = window.innerWidth;
    let chunkSize = 4;      // make 4 chunk In every array
    if (screenWidth >= 768 && screenWidth <= 992) {
      chunkSize = 3;        // make 3 chunk In every array
    } else if (screenWidth >= 576 && screenWidth <= 767) {
      chunkSize = 2;        // make 2 chunk In every array
    } else if (screenWidth <= 575) {
      chunkSize = 1;        // make 1 chunk In every array
    }
    return chunkSize;
  }

  onRate(event) {
    return;
  }

}
