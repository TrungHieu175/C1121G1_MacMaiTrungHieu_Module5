import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomerService} from "../../../services/customer.service";
import {CustomerTypeService} from "../../../services/customer-type.service";
import {ICustomerType} from "../../../model/ICustomerType";
import {CustomerDto} from "../../../dto/customer-dto";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  customerForm !: FormGroup;
  actionBtn: string = 'Save';
  customerTypes !: ICustomerType[];
  warningMessage : string;

  compareFn(c1: ICustomerType, c2: ICustomerType): boolean{
    return c1 && c2 ? c1.id == c2.id : c1 == c2;
  };

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public updateData : any,
              private dialogRef : MatDialogRef<DialogComponent>,
              private customerTypeService: CustomerTypeService,
              private customerService: CustomerService,
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
      customerPhone: ["", [Validators.required, Validators.pattern('^$|^(0|\\(84\\)\\+)9[0|1]\\d{7}$')]],
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
        // if (!error.error.status) {
        //   this.customerCode.setErrors({existed: error.error.errorMap.customerCode});
        // } else {
        //   this.warningMessage = 'Update Failed!'
        // }
      })

    // let customerDto : CustomerDto = this.customerForm.value;
    // customerDto.customerType
    // this.customerTypeService
    // this.customerTypeService.getCustomerTypeById(this.customerForm.value.customerType).subscribe(
    //   (response)=>{
    //     let customerType : ICustomerType = response;
    //   })
      // let customerDto : CustomerDto = this.customerForm.value;
      // customerDto.customerType = this.customerForm.value.customerType.id;
      // customerDto.active = 1;
      // this.customerService.update(customerDto).subscribe(
      //   (response)=>{
      //     console.log('OK');
      //     this.customerForm.reset();
      //     this.dialogRef.close('update');
      //   },
      //   (error)=>{
      //     if (!error.error.status) {
      //       this.customerCode.setErrors({existed: error.error.errorMap.customerCode});
      //     } else {
      //       this.warningMessage = 'Update Failed!'
      //     }
      //   })


  }
  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: 2000,
    });
  }
}
