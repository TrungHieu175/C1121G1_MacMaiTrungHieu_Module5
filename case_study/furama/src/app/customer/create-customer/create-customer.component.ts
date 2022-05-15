import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private customerService:CustomerService,
              private router:Router) {
  }

  ngOnInit(): void {

    this.customerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      idCard: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });
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
    this.customerService.postProduct(this.customerForm.value).subscribe((response)=>{
        alert('OK');
        this.router.navigateByUrl('/product');
      },
      (error)=>{ alert('Failed') })
  }
}
