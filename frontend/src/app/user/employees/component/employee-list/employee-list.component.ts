import {
  Component,
  OnInit,
  HostListener,
  AfterViewInit, ViewChild, ElementRef, Renderer2,
} from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
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
import * as searchActions from '../../../search/store/actions/search.actions';
import {searchSelector} from '../../../search/store/reducers/search.reducer';
import {Search} from '../../../search/entity/search';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, AfterViewInit {
  @ViewChild('circleCarousel', {static: false}) circleCarousel: ElementRef;
  @ViewChild('searchListItems', {static: false}) searchListItems: ElementRef;
  @ViewChild('searchingInput', {static: false}) searchingInput: ElementRef;
  dataSearch: Search[];
  employeeList: EmployeeList[];
  employees: any = [[]];            // Empty Array To Use It With Employee Carousel
  selectedEmployee: any;
  employeeCustomerComments: EmployeeCustomerComments[];
  employeeProjectsList: EmployeeProjects[];
  employeeProjectsCarousel: any = [[]];
  angle = 0;
  totalItems: any;

  constructor(private render: Renderer2, private store: Store<UserState>,
              private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {
    // Dispatch Loading Employee
    this.store.dispatch(new employeeAction.LoadEmployees());
    // Select only employee Array and subscribe it
    this.store.pipe(select(getEmployeesSelector)).subscribe(
      employeeList => {
        this.employeeList = this.shuffle(employeeList);
        this.employees = HelperService.chunk(this.shuffle(employeeList), this.onResize());
      }
    );

    this.store.select(searchSelector).subscribe(
      searchResult => {
        this.dataSearch = searchResult;
      }
    );

  }


  ngAfterViewInit() {
    setTimeout(() => {
      const container = this.circleCarousel.nativeElement;    // The Parent container
      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;
      const radius = 1100;
      // xl: 700, lg: 600,

      const carouselItems = this.circleCarousel.nativeElement.children;
      this.totalItems = carouselItems.length;
      // const rotate = -1460 / totalItems;
      const rotate = -1 / this.totalItems;
      let rotated = -rotate / 2;

      for (let i = 0; i < carouselItems.length ; i++) {
        const w2 = carouselItems[i].offsetWidth / 2; // true: margin included
        const h2 = carouselItems[i].offsetHeight / 2;
        this.angle = 360 / this.totalItems * i;
        const x = Math.round(centerX + radius * Math.sin(this.angle * Math.PI / 180));
        const y = Math.round(centerY + radius * -Math.cos(this.angle * Math.PI / 180));
        // carouselItems[i].setAttribute('style', `top:${y - h2}px; right:${x - w2}px`);
        this.render.setAttribute(carouselItems[i], 'style', `top:${y - h2}px; right:${x - w2}px`);
        this.render.addClass(carouselItems[0], 'activate');
        this.render.setAttribute(carouselItems[i].firstChild, 'style', 'transform: rotate(' + rotate / 2 + 'deg)');
      }
      // Setting initial state
      this.render.setAttribute(container, 'style', 'transform: rotate(' + -rotate / 2 + 'deg)');
      // $('#circle-carousel').css('transform', 'rotate(' + -rotate / 2 + 'deg)');
      // $('.circle-carousel__item div').css('transform', 'rotate(' + rotate / 2 + 'deg)');

      // const activateClass = this.render.selectRootElement('.circle-carousel__item');
      $('.activate').prev().addClass('ws-next-to-active');
      $('.activate').next().addClass('ws-next-to-active');
      // this.render.addClass(this.render.nextSibling(activateClass), 'ws-next-to-active');

      $('.circle-carousel__item').on('click', function() {
        var thisNum = $(this).data('num');
        var currentNum = $('.activate').data('num');
        var numOfRotations = (thisNum - currentNum);
        if (numOfRotations < -this.totalItems / 2) {
          numOfRotations += this.totalItems;
        }
        if (numOfRotations > this.totalItems / 2) {
          numOfRotations -= this.totalItems;
        }
        // The Rotated Degree That Add To '.circle-carousel' Element When Pressing On '.circle-carousel__item' Element
        rotated += (11.25 * numOfRotations);

        $('#circle-carousel').css('transform', 'rotate(' + rotated + 'deg)');
        $('.circle-carousel__item div').css('transform', 'rotate(' + -rotated + 'deg)');
        $('.circle-carousel__item').removeClass('activate').removeClass('ws-next-to-active');

        $(this).addClass('activate');
        $('.activate').prev().addClass('ws-next-to-active');
        $('.activate').next().addClass('ws-next-to-active');

      });
    }, 2000);
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

    // Smooth scrolling section
    setTimeout(() => {
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: '.employee-details-section',
      });
    }, 750);
  }

  // Search Method
  search(text) {
    // Check If The Input Search Is Not Empty
    if (text.target.value !== '') {
      const ListItems = this.searchListItems; // Fetch The Input Search Element
      // Automatic search result list style
      this.render.setAttribute(ListItems.nativeElement, 'style', 'display: block; top: ' + this.searchingInput.nativeElement.offsetHeight + 'px');
      // dispatch load search
      this.store.dispatch(new searchActions.LoadSearch(text.target.value));
    } else {
      this.searchListItems.nativeElement.style.display = 'none';
    }
  }

  findEmployee(event) {
    // console.log(this.searchListItems.nativeElement.style.top);
    // Get The data-id attribute
    const dataId = event.path['1'].getAttribute('data-id');
    // Get The Children Inside The Search Result List
    const carouselItems = this.circleCarousel.nativeElement.children;
    // Search In All Employees List
    for (let i = 0; i < carouselItems.length; i++) {
      // Select the employee that has the id that equal to same data-id
      if (carouselItems[i].getAttribute('id') == dataId) {
        this.onSelected(this.employeeList[i]);
        this.searchingInput.nativeElement.value = '';               // Reset The Input
        this.searchListItems.nativeElement.style.display = 'none';  // Display the List Of Search Result
      }
    }
  }

  // Shuffle The Array
  shuffle(arr) {
    let i;
    let j;
    let temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

}
