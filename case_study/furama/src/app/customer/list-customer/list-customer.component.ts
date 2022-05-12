import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: any = [];

  constructor(
    private customerService: CustomerService
  ) {
  }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomerList();
  }

}
