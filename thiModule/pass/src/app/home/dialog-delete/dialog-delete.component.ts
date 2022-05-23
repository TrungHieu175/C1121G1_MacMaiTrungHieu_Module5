import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BaiDangService} from "../../services/baiDang.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA,) public deleteData: any,
              private customerService: BaiDangService,
              private dialogRef: MatDialogRef<DialogDeleteComponent>,
              private router: Router,
              private matSnackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }
  deleteCustomer() {
    if(this.deleteData){
      this.customerService.deleteCustomer(this.deleteData.id).subscribe(
        (response)=>{
          this.openSnackBar('Delete Successfully', 'OK');
          this.dialogRef.close('close');
        },
        (error)=>{
          this.openSnackBar('Delete Failed', 'OK!');
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
