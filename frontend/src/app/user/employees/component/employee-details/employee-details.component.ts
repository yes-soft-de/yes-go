import { Component, OnInit, HostListener, Input } from '@angular/core';
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
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() employeeDetails: EmployeeDetail;
  @Input() employeeDetailsCustomerComments: EmployeeCustomerComments[];
  @Input() employeeDetailsProjectsList: EmployeeProjects[];
  @Input() employeeDetailsProjectsCarousel: any = [[]];

  constructor() { }

  ngOnInit() {
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
