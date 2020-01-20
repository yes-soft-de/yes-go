import {Component, HostListener, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {CustomerList} from '../../entity/customer-list';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customersList: CustomerList[];
  customers = [[]];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(
      customersList => {
        this.customersList = customersList;
        this.customers = this.chunk(customersList, this.onResize());
        console.log('customers : ', this.customers);
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

  // create chunk of Customers array to use it in customer carousel
  chunk(customersArray, chunkSize) {
    const arr = [];
    for (let i = 0, len = customersArray.length; i < len; i += chunkSize) {
      arr.push(customersArray.slice(i, i + chunkSize));
    }
    return arr;
  }

}
