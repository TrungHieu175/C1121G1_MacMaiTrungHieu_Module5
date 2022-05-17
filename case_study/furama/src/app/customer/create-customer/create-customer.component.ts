import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ICustomerType} from "../../model/ICustomerType";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;
  customerType: ICustomerType[];

  constructor(private customerService: CustomerService,
              private router: Router,
              private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {

    this.customerForm = new FormGroup({
      customerName: new FormControl('', Validators.required),
      customerBirthday: new FormControl('', Validators.required),
      customerGender: new FormControl('', Validators.required),
      customerIdCard: new FormControl('', Validators.required),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
      customerEmail: new FormControl('', [Validators.required, Validators.email]),
      customerAddress: new FormControl('', Validators.required),
      customerType: new FormControl('', Validators.required),
    });
    this.getAllCustomerType();
  }

  checkAge(dayOfBirth: AbstractControl) {
    const birth = new Date(dayOfBirth.value);
    const birthDay = Date.now() - birth.getTime() - 86400000;
    const time = new Date(birthDay);
    const age = time.getUTCFullYear() - 1970;
    if (age < 18) {
      return {ageEro: true};
    }
    return null;
  }

  createCustomer() {
    if (this.customerForm.invalid) {
      this.customerService.postProduct(this.customerForm.value).subscribe((response) => {
          alert('OK');
          this.router.navigateByUrl('/customer');
        },
        (error) => {
          alert('Failed')
        })
    }

  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action);
  }

  getAllCustomerType() {
    this.customerService.getAllCustomerType().subscribe(data => {
      console.log(data);
      this.customerType = data;
      this.customerForm.controls['customerType'].setValue(this.customerType[0]);
    })
  }


  saveCustomer() {
    this.customerService.getCreateCustomer(this.customerForm.value).subscribe(() => {
      },
      error => {
        this.matSnackBar.open('Add new Customer Failed', 'OK!');
      },
      () => {
        this.matSnackBar.open('Add new Customer Successfully', 'OK!');
      }
    );
  this.router.navigate(['customer']);
  }


}

