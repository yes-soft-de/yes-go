import { Component, OnInit, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import * as customerAction from '../../state/actions/customer.actions';
import { getCustomersSelector } from '../../state/reducers/customer.reduce';
import { CustomerList } from '../../entity/customer-list';
import { HelperService } from 'src/app/user/shared/helper/helper.service';
import { AppState } from 'src/app/user/state/app-state';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customersList: CustomerList[];
  customers = [[]];

  constructor(private store: Store<AppState>) { }


  ngOnInit() {
    // dispatch customers loading
    this.store.dispatch(new customerAction.LoadCustomers());
    // select our customer array only and subscribe
    this.store.select(getCustomersSelector).subscribe(
      customerList => {
        this.customersList = customerList;
        this.customers = HelperService.chunk(customerList, this.onResize());
      }
    );
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
