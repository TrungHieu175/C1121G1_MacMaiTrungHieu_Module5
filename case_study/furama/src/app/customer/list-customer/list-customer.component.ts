import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {ICustomer} from "../../model/ICustomer";
import {MatDialog} from "@angular/material/dialog";
import {CreateCustomerComponent} from "../create-customer/create-customer.component";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: ICustomer[];
  p: number;

  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAll();

  }

  getAll(){
    this.customerService.getAllCustomer().subscribe(data =>{
      console.log(data)
      this.customerList = data;
      console.log(this.customerList)
    })
  }

  openCreateDialog(data) {
    this.customerService.getCreateCustomer(data).subscribe(data => {
      const dialogRef = this.dialog.open(CreateCustomerComponent, {
        width: '780px',
        data: {data1: data}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }

}
