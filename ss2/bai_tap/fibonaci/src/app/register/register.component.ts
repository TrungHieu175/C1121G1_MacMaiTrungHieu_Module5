import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    function comparePassword(c: AbstractControl) {
      const v = c.value;
      return (v.password === v.confirmPassword) ? null : {
        passwordNotMatch: true
      }
    }

  this.registerForm = new FormGroup({
    email: new FormControl(''),
    pwGroup: new FormGroup({
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    }, comparePassword),
    name: new FormControl(''),
    country: new FormControl(''),
    phone: new FormControl(''),
    Gender: new FormControl(''),
    Phone: new FormControl('')
    });
    this.registerForm = this.fb.group({
      email: ['',[
        Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: '',
        confirmPassword: ''
      }, {validator: comparePassword}),
      name:['',Validators.required],
      country: ['',Validators.required],
      age: ['',[Validators.required, Validators.min(18)]],
      gender: ['',Validators.required],
      phone: ['',[Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]],
    })
  }

  onSubmit() {
    console.log(this.registerForm.value)
  }

}
//
// email:
// password: new FormControl('', [Validators.required, Validators.minLength(6)]),
//
// country: new FormControl('', Validators.required),
//
// phone: new FormControl('', [Validators.required, Validators.pattern('/^\+84\d{9,10}$/')]),

