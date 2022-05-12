import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;

  constructor() {
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

}
