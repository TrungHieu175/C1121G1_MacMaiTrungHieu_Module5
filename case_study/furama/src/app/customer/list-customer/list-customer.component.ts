import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {ICustomer} from "../../model/ICustomer";
import {MatDialog} from "@angular/material/dialog";
import {CreateCustomerComponent} from "../create-customer/create-customer.component";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Customer} from "../../model/customer";
import {DialogComponent} from "./dialog/dialog.component";
import {DialogDeleteComponent} from "./dialog-delete/dialog-delete.component";
import {DialogCreateComponent} from "./dialog-create/dialog-create.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  p: number = 1;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'customerCode', 'customerName', 'customerBirthday', 'customerGender', 'customerIdCard', 'customerPhone', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog,
    private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getAll();

  }

  getAll() {
    this.customerService.getAllCustomer().subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateCustomer(row: any) {
    this.dialog.open(DialogComponent, {
      width: '60%',
      data: row
    }).afterClosed().subscribe((response) => {
      this.getAll();
    });
  }

  createCustomer() {
    this.dialog.open(DialogCreateComponent, {
      width: '60%',
    }).afterClosed().subscribe((response) => {
      this.getAll();
    });
  }
  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: 2000,
    });
  }
  deleteCustomer(row: any) {
    this.dialog.open(DialogDeleteComponent, {
      width: '60%',
      data: row
    }).afterClosed().subscribe((response) => {
      this.getAll();
    });
  }
}
