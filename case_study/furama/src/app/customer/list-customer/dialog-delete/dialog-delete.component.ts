import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomerService} from "../../../services/customer.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA,) public deleteData: any,
              private customerService: CustomerService,
              private dialogRef: MatDialogRef<DialogDeleteComponent>,
              private router: Router,
              private matSnackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }
  deleteCustomer() {
    if(this.deleteData){
      this.customerService.deleteCustomer(this.deleteData.id).subscribe(
        (response)=>{
          this.openSnackBar('Delete Customer Successfully', 'OK');
          this.dialogRef.close('close');
        },
        (error)=>{
          this.openSnackBar('Delete Customer Failed', 'OK!');
          this.router.navigateByUrl('/error/404');
        }
      );
    }
  }
  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: 2000,
    });
  }
}
