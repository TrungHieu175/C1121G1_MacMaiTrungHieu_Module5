import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  serviceForm : FormGroup

  constructor() { }

  ngOnInit(): void {
    this.serviceForm = new FormGroup( {
      serviceCode: new FormControl( '', [Validators.required, Validators.pattern( '^$|(DV-)[0-9]{4}')]),
      serviceName: new FormControl( '', [Validators.required,Validators.maxLength(15)]),
      serviceArea: new FormControl( '', [Validators.required, Validators.min(0)]),
      serviceCost: new FormControl( '', [Validators.required, Validators.min(0)]),
      serviceMaxPeople: new FormControl( '', [Validators.required, Validators.min(0)]),
      standardRoom: new FormControl( '', [Validators.required,Validators.min(0)]),
      convenience: new FormControl( '', [Validators.required,Validators.min(0)]),
      poolArea: new FormControl( '', [Validators.required,Validators.min(0)]),
      floors: new FormControl( '', [Validators.required,Validators.min(0)]),
      serviceType : new FormControl('',Validators.required),
      rentType: new FormControl( '', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.serviceForm.value)
  }
}
