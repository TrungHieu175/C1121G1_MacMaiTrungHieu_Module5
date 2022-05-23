import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {BaiDangService} from "../../services/baiDang.service";
import {ITrangThai} from "../../model/iTrangThai";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TrangThaiService} from "../../services/trangThai.service";

@Component({
  selector: 'app-dialog-create',
  templateUrl: './dialog-create.component.html',
  styleUrls: ['./dialog-create.component.css']
})
export class DialogCreateComponent implements OnInit {

  customerCreateForm !: FormGroup;
  actionBtn: string = 'Save';
  customerTypes !: ITrangThai[];
  warningMessage: string;

  compareFn(c1: ITrangThai, c2: ITrangThai): boolean {
    return c1 && c2 ? c1.id == c2.id : c1 == c2;
  };

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<DialogCreateComponent>,
              private customerTypeService: TrangThaiService,
              private customerService: BaiDangService,
              private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getAllCustomerTypes();
    this.customerCreateForm = this.fb.group({
      customerCode: ["", [Validators.required]],
      customerName: ["", Validators.required],
      customerBirthday: ["", Validators.required],
      customerGender: [""],
      customerIdCard: ["", [Validators.required, Validators.pattern('^$|^\\d{9}$')]],
      customerPhone: ["", [Validators.required]],
      customerEmail: ["", [Validators.required]],
      customerAddress: ["", Validators.required],
      customerType: ["", Validators.required]
    })


  }

  get tuaDe() {
    return this.customerCreateForm.get('customerCode');
  }

  get banDangTin() {
    return this.customerCreateForm.get('customerName');
  }

  get ngayDang() {
    return this.customerCreateForm.get('customerBirthday');
  }

  get banLa() {
    return this.customerCreateForm.get('customerGender');
  }

  get gia() {
    return this.customerCreateForm.get('customerIdCard');
  }

  get dienTich() {
    return this.customerCreateForm.get('customerPhone');
  }

  get customerEmail() {
    return this.customerCreateForm.get('customerEmail');
  }

  get danhMuc() {
    return this.customerCreateForm.get('customerAddress');
  }

  get trangThai() {
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
        this.openSnackBar('Add new Successfully', 'OK');
        this.customerCreateForm.reset();
        this.dialogRef.close('update');
      },
      (error) => {
        this.openSnackBar('Add new Failed', 'OK!');
        if (!error.error.status) {
          this.tuaDe.setErrors({existed: error.error.errorMap.customerCode});
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
