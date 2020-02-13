import { Component, OnInit, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { StarRatingComponent } from 'ng-starrating';
import { EmployeeDetail } from '../../entity/employee-detail';
import { EmployeeCustomerComments } from '../../../customers/entity/employee-customer-comments';
import { EmployeeProjects } from '../../entity/employee-projects';
import * as employeeAction from '../../state/actions/employee.actions';
import * as employeeCustomerCommentsAction from '../../../customers/state/actions/customer-comments.actions';
import * as employeeProjectsActions from '../../state/actions/employee-projects.actions';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/user/state/app-state';
import { getCustomerCommentsSelector } from 'src/app/user/customers/state/reducers/customer-comments.reducer';
import { Observable } from 'rxjs';
import { getEmployeeDetailSelector } from '../../state/reducer/employee.reducer';
import { getEmployeeProjectsSelector } from '../../state/reducer/employee-projects.reducer';
import { HelperService } from 'src/app/user/shared/helper/helper.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss', '../employee-short-detail/employee-short-detail.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeDetails: EmployeeDetail;
  employeeCustomerComments: Observable<EmployeeCustomerComments[]>;
  employeeProjectsList: EmployeeProjects[];
  employeeProjectsCarousel: any = [[]];

  constructor(
    private store: Store<AppState>,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.url.subscribe(
      urlSegments => {
        // Dispatch our Loading Employee Action
        this.store.dispatch(new employeeAction.LoadEmployee(Number(urlSegments[1].path)));
        // Subscribe All Our Data
        this.store.select(getEmployeeDetailSelector).subscribe(
          employeeDetails => this.employeeDetails = employeeDetails
        );

        // Dispatch our Loading Employee Customer Comments Action
        this.store.dispatch(new employeeCustomerCommentsAction.LoadEmployeeCustomerComments(Number(urlSegments[1].path)));
        this.employeeCustomerComments = this.store.select(getCustomerCommentsSelector);

        // Dispatch our Loading Employee Projects Action
        this.store.dispatch(new employeeProjectsActions.LoadEmployeeProjects(Number(urlSegments[1].path)));
        this.store.select(getEmployeeProjectsSelector).subscribe(
          customerProjects => {
            this.employeeProjectsList = customerProjects;
            this.employeeProjectsCarousel = HelperService.chunk(customerProjects, this.onResize());
          }
        );
      });
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

  
}
