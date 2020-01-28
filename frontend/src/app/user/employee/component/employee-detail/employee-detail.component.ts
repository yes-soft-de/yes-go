import {Component, HostListener, OnInit} from '@angular/core';
import {StarRatingComponent} from 'ng-starrating';
import {EmployeeService} from '../../service/employee.service';
import {EmployeeDetail} from '../../entity/employee-detail';
import {ActivatedRoute} from '@angular/router';
import {EmployeeCustomerComments} from '../../entity/employee-customer-comments';
import {EmployeeProjects} from '../../entity/employee-projects';
import {HelperService} from '../../../shared/helper/helper.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss', '../employee-short-detail/employee-short-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  employeeDetails: EmployeeDetail;
  employeeCustomerComments: EmployeeCustomerComments[];
  employeeProjectsList: EmployeeProjects[];
  employeeProjectsCarousel: any = [[]];

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
        this.employeeService.getEmployeeCustomerComments(Number(urlSegments[1].path)).subscribe(
          employeeCustomerComments => {
            this.employeeCustomerComments = employeeCustomerComments.slice(0, 2);
            console.log('employeeCustomerComments', employeeCustomerComments);
          }
        );
        this.employeeService.getEmployeeProjects(Number(urlSegments[1].path)).subscribe(
          employeeProjects => {
            console.log('employeeProjects', employeeProjects);
            this.employeeProjectsList = employeeProjects;
            this.employeeProjectsCarousel = HelperService.chunk(employeeProjects, this.onResize());
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
