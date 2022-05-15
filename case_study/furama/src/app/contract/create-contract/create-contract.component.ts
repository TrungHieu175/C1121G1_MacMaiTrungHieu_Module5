import { Component, OnInit } from '@angular/core';
import {ContractService} from "../../services/contract.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {

  contractForm : FormGroup

  constructor(private contractService:ContractService,
              private router:Router) { }

  ngOnInit(): void {
    this.contractForm = new FormGroup({
      contractId: new FormControl('', Validators.required),
      contractCode: new FormControl('', Validators.required),
      customerName: new FormControl('', Validators.required),
      employeeName: new FormControl('', Validators.required),
      facilityName: new FormControl('', Validators.required),
      contractStartDate: new FormControl('', Validators.required),
      contractEndDate: new FormControl('', Validators.required),
      contractDeposit: new FormControl('', Validators.required),
      contractTotalMoney: new FormControl('', Validators.required),
    })
  }
}
