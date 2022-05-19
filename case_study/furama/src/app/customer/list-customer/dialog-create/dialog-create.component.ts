import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ICustomerType} from "../../../model/ICustomerType";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomerTypeService} from "../../../services/customer-type.service";
import {CustomerService} from "../../../services/customer.service";
import {DialogComponent} from "../dialog/dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-create',
  templateUrl: './dialog-create.component.html',
  styleUrls: ['./dialog-create.component.css']
})
export class DialogCreateComponent implements OnInit {

  customerCreateForm !: FormGroup;
  actionBtn: string = 'Save';
  customerTypes !: ICustomerType[];
  warningMessage: string;

  compareFn(c1: ICustomerType, c2: ICustomerType): boolean {
    return c1 && c2 ? c1.id == c2.id : c1 == c2;
  };

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<DialogComponent>,
              private customerTypeService: CustomerTypeService,
              private customerService: CustomerService,
              private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getAllCustomerTypes();
    this.customerCreateForm = this.fb.group({
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


  }

  get customerCode() {
    return this.customerCreateForm.get('customerCode');
  }

  get customerName() {
    return this.customerCreateForm.get('customerName');
  }

  get customerBirthday() {
    return this.customerCreateForm.get('customerBirthday');
  }

  get customerGender() {
    return this.customerCreateForm.get('customerGender');
  }

  get customerIdCard() {
    return this.customerCreateForm.get('customerIdCard');
  }

  get customerPhone() {
    return this.customerCreateForm.get('customerPhone');
  }

  get customerEmail() {
    return this.customerCreateForm.get('customerEmail');
  }

  get customerAddress() {
    return this.customerCreateForm.get('customerAddress');
  }

  get customerType() {
    return this.customerCreateForm.get('customerType');
  }

  getAllCustomerTypes() {
    this.customerTypeService.getAllCustomerType().subscribe(
      (response) => {
        this.customerTypes = response;
      }
    );
  }


  createCustomer() {
    this.customerService.postCustomer(this.customerCreateForm.value).subscribe(
      (response) => {
        this.openSnackBar('Add new Customer Successfully', 'OK');
        this.customerCreateForm.reset();
        this.dialogRef.close('update');
      },
      (error) => {
        this.openSnackBar('Add new Customer Failed', 'OK!');
        if (!error.error.status) {
          this.customerCode.setErrors({existed: error.error.errorMap.customerCode});
        } else {
          this.warningMessage = 'Update Failed!'
        }
      })
  }
  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: 2000,
    });
  }
}
