import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TrangThaiService} from "../../services/trangThai.service";
import {BaiDangService} from "../../services/baiDang.service";
import {ITrangThai} from "../../model/iTrangThai";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.css']
})
export class DialogUpdateComponent implements OnInit {
  customerForm !: FormGroup;
  actionBtn: string = 'Save';
  customerTypes !: ITrangThai[];
  warningMessage : string;

  compareFn(c1: ITrangThai, c2: ITrangThai): boolean{
    return c1 && c2 ? c1.id == c2.id : c1 == c2;
  };

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public updateData : any,
              private dialogRef : MatDialogRef<DialogUpdateComponent>,
              private customerTypeService: TrangThaiService,
              private customerService: BaiDangService,
              private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllCustomerTypes();
    this.customerForm = this.fb.group({
      id: ["", Validators.required],
      customerCode: ["", [Validators.required, Validators.pattern('^$|^KH-[\\d]{4}$')]],
      customerName: ["", Validators.required],
      customerBirthday: ["", Validators.required],
      customerGender: [""],
      customerIdCard: ["", [Validators.required, Validators.pattern('^$|^\\d{9}$')]],
      customerPhone: ["", [Validators.required, Validators.pattern('^$|^(0|\\(84\\)\\+)9[0-9]\\d{7}$')]],
      customerEmail: ["", [Validators.required, Validators.email]],
      customerAddress: ["", Validators.required],
      customerType: ["", Validators.required]
    })
    console.log(this.updateData)
    if(this.updateData){
      this.customerForm.controls['id'].setValue(this.updateData.id);
      this.customerForm.controls['customerCode'].setValue(this.updateData.customerCode);
      this.customerForm.controls['customerName'].setValue(this.updateData.customerName);
      this.customerForm.controls['customerBirthday'].setValue(this.updateData.customerBirthday);
      this.customerForm.controls['customerGender'].setValue(this.updateData.customerGender + "");
      this.customerForm.controls['customerIdCard'].setValue(this.updateData.customerIdCard);
      this.customerForm.controls['customerPhone'].setValue(this.updateData.customerPhone);
      this.customerForm.controls['customerEmail'].setValue(this.updateData.customerEmail);
      this.customerForm.controls['customerAddress'].setValue(this.updateData.customerAddress);
      this.customerForm.controls['customerType'].setValue(this.updateData.customerType);
      this.actionBtn = 'Update';
    }


  }

  get customerCode() {
    return this.customerForm.get('customerCode');
  }

  get customerName() {
    return this.customerForm.get('customerName');
  }

  get customerBirthday() {
    return this.customerForm.get('customerBirthday');
  }

  get customerGender() {
    return this.customerForm.get('customerGender');
  }

  get customerIdCard() {
    return this.customerForm.get('customerIdCard');
  }

  get customerPhone() {
    return this.customerForm.get('customerPhone');
  }

  get customerEmail() {
    return this.customerForm.get('customerEmail');
  }

  get customerAddress() {
    return this.customerForm.get('customerAddress');
  }

  get customerType() {
    return this.customerForm.get('customerType');
  }

  getAllCustomerTypes(){
    this.customerTypeService.getAllCustomerType().subscribe(
      (response)=>{
        this.customerTypes = response;
      }
    );
  }


  updateCustomer() {
    console.log(this.customerForm.value);
    this.customerService.updateCustomer(this.customerForm.value).subscribe(
      (response)=>{
        this.openSnackBar('Update Customer Successfully', 'OK');
        this.customerForm.reset();
        this.dialogRef.close('update');
      },
      (error)=>{
        this.openSnackBar('Update Customer Failed', 'OK!');
      })
  }
  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: 2000,
    });
  }

}
