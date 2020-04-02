import {Component, OnInit, HostListener, Input, Output, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { EmployeeDetail } from '../../entity/employee-detail';
import { EmployeeCustomerComments } from '../../../customers/entity/employee-customer-comments';
import { EmployeeProjects } from '../../entity/employee-projects';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('empDetails', {read: ElementRef, static: true}) empDetails: ElementRef;
  @Input() employeeDetails: EmployeeDetail;
  @Input() employeeDetailsCustomerComments: EmployeeCustomerComments[];
  @Input() employeeDetailsProjectsList: EmployeeProjects[];
  @Input() employeeDetailsProjectsCarousel: any = [[]];
  loaded = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.empDetails.nativeElement.focus();
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

  computerLoad(event: Event) {
    if (event.returnValue) {
      this.loaded = true;
      console.log('load: ', this.loaded);
    } else {
      this.loaded = false;
      console.log('!load: ', this.loaded);
    }
  }

  mobileLoad(event) {
    if (event.returnValue) {
      this.loaded = true;
      console.log('load: ', this.loaded);
    } else {
      this.loaded = false;
      console.log('!load: ', this.loaded);
    }
  }


}
