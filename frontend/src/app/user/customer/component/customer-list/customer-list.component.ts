import {Component, HostListener, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {CustomerList} from '../../entity/customer-list';
import {CustomerRepositoryService} from '../../repository/customer-repository.service';
import {HelperService} from '../../../shared/helper/helper.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customersList: CustomerList[];
  customers = [[]];

  constructor(private customerService: CustomerService,
              private customerSer: CustomerRepositoryService) { }

  ngOnInit() {

    this.customerService.getAllCustomers().subscribe(
      customersList => {
        this.customersList = customersList;
        this.customers = HelperService.chunk(customersList, this.onResize());
        console.log('customers : ', this.customers);
      }
    );

    this.customerSer.getCustomer(2).subscribe(
      data => {
        console.log('customer detail: ', data);
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
