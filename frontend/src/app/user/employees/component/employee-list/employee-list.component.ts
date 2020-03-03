import {Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit, AfterContentInit} from '@angular/core';
import { EmployeeList } from '../../entity/employee-list';
import { Store, select } from '@ngrx/store';
import { UserState } from 'src/app/user/store/app-state';
import * as employeeAction from '../../store/actions/employee.actions';
import { getEmployeesSelector } from '../../store/reducer/employee.reducer';
import { HelperService } from 'src/app/user/shared/helper/helper.service';
import { getCustomerCommentsSelector } from 'src/app/user/customers/store/reducers/customer-comments.reducer';
import { LoadEmployeeCustomerComments } from 'src/app/user/customers/store/actions/customer-comments.actions';
import { EmployeeCustomerComments } from 'src/app/user/customers/entity/employee-customer-comments';
import { EmployeeProjects } from '../../entity/employee-projects';
import { LoadEmployeeProjects } from '../../store/actions/employee-projects.actions';
import { getEmployeeProjectsSelector } from '../../store/reducer/employee-projects.reducer';
import * as $ from 'jquery';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, AfterViewInit {
  employeeList: EmployeeList[];
  employees: any = [[]];            // Empty Array To Use It With Employee Carousel
  selectedEmployee: any;
  employeeCustomerComments: EmployeeCustomerComments[];
  employeeProjectsList: EmployeeProjects[];
  employeeProjectsCarousel: any = [[]];


  constructor(private store: Store<UserState>) { }

  ngOnInit() {
    // Dispatch Loading Employee
    this.store.dispatch(new employeeAction.LoadEmployees());
    // Select only employee Array and subscribe it
    this.store.pipe(select(getEmployeesSelector)).subscribe(
      employeeList => {
        this.employeeList = employeeList;
        this.employees = HelperService.chunk(employeeList, this.onResize());
      }
    );

  }


  ngAfterViewInit() {
    var container = $('#circle-carousel'),
      centerX = container.width()/2,
      centerY = container.height()/2,
      angle = 0,
      radius = 700;
    //xl: 700, lg: 600,

    var carouselItems = $('.circle-carousel__item'),
      totalItems = carouselItems.length;

    carouselItems.each(function(i, e) {
      var w2 = $(e).outerWidth(true)/2,
        h2 = $(e).outerHeight(true)/2,
        angle = 360/totalItems*i,
        x = Math.round(centerX+radius *  Math.sin(angle*Math.PI/180)),
        y = Math.round(centerY+radius * -Math.cos(angle*Math.PI/180));
        $(e).css({right:x-w2, top:y-h2});
      // console.log('right: ', x-w2, ' top: ', y-h2, ' x: ', x, ' y: ', y, ' w2: ', w2, ' h2: ', h2);
    });

    var rotate = -1460/totalItems;
    var rotated = -rotate/2;

    // Setting initial state
    $('#circle-carousel').css('transform', 'rotate('+ -rotate/2 +'deg)');
    $('.circle-carousel__item div').css('transform', 'rotate('+ rotate/2 +'deg)');
    $('.activate').prev().addClass('ws-next-to-active');
    $('.activate').next().addClass('ws-next-to-active');

    $('.circle-carousel__item').on('click', function() {
      var thisNum = $(this).data('num');
      var currentNum = $('.activate').data('num');
      var numOfRotations = (thisNum - currentNum);
      if (numOfRotations < -totalItems/2) {
        numOfRotations += totalItems;
      }
      if (numOfRotations > totalItems/2) {
        numOfRotations -= totalItems;
      }

      rotated += (18 * numOfRotations);

      $('#circle-carousel').css('transform', 'rotate('+ rotated +'deg)');
      $('.circle-carousel__item div').css('transform', 'rotate('+ -rotated +'deg)');
      $('.circle-carousel__item').removeClass('activate').removeClass('ws-next-to-active');

      $(this).addClass('activate');
      $('.activate').prev().addClass('ws-next-to-active');
      $('.activate').next().addClass('ws-next-to-active');
    });
  }

  // Host For Fetch Screen Size And Change The Chunk Array Size
    @HostListener('window:resize', ['$event'])
    onResize(event?) {
      const screenWidth = window.innerWidth;
      let chunkSize = 4;      // make 4 chunk In every array
      if (screenWidth >= 768 && screenWidth <= 992) {
        chunkSize = 3;        // make 3 chunk In every array
      } else if (screenWidth <= 767) {
        chunkSize = 1;        // make 1 chunk In every array
      }
      return chunkSize;
    }

    // Select Our Employee And Fetch His Detail
    onSelected(employee: EmployeeList) {
      this.selectedEmployee = employee;
      // Dispatch for Loading Customer Comments
      this.store.dispatch(new LoadEmployeeCustomerComments(employee.id));
      this.store.select(getCustomerCommentsSelector).subscribe(
        customerComments => this.employeeCustomerComments = customerComments
      );

      // Dispatch our Loading Employee Projects Action
      this.store.dispatch(new LoadEmployeeProjects(employee.id));
      this.store.select(getEmployeeProjectsSelector).subscribe(
        customerProjects => {
          this.employeeProjectsList = customerProjects;
          this.employeeProjectsCarousel = HelperService.chunk(customerProjects, this.onResize());
        }
      );
    }
}
