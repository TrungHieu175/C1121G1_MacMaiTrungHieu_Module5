import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
import {ProductService} from '../services/product.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['productName', 'date', 'price', 'freshness', 'comment', 'actions'];

  constructor(public dialog: MatDialog, private productService: ProductService) {
  }


  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal},
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }
  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (response) => {
        console.log('OK');
        this.dataSource = new MatTableDataSource<any>(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        alert('FAILED');
      },
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  updateProduct(row: any) {
    this.dialog.open(DialogComponent,{
      width: '60%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value === 'update'){
        this.getAllProducts();
      }
    })
  }

  deleteProduct(row: any){
    this.dialog.open(ProductModalComponent, {
      width: '60%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value === 'close'){
        this.getAllProducts();
      }
    })
  }
  ngOnInit(): void {
    this.getAllProducts();
  }

}
