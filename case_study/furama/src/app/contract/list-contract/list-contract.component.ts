import { Component, OnInit } from '@angular/core';
import {ContractService} from "../../services/contract.service";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contracts: any = [];

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.contracts = this.contractService.getContractList()
  }

}
