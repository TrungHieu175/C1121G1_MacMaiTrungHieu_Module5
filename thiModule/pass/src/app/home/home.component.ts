import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {DialogCreateComponent} from "./dialog-create/dialog-create.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatTableDataSource} from "@angular/material/table";
import {DialogDeleteComponent} from "./dialog-delete/dialog-delete.component";
import {DialogUpdateComponent} from "./dialog-update/dialog-update.component";
import {BaiDangService} from "../services/baiDang.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  dataSource !: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'customerCode', 'customerName', 'customerBirthday', 'customerGender', 'customerIdCard', 'customerPhone', 'actions'];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    private customerService: BaiDangService,
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateCustomer(row: any) {
    this.dialog.open(DialogUpdateComponent, {
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
