export class Contract {
  contractId: number;
  contractCode: string;
  customerName: string;
  employeeName: string;
  facilityName: string;
  contractStartDate: string;
  contractEndDate: string;
  contractDeposit: number;
  contractTotalMoney: number;


  constructor(contractId: number, contractCode: string, customerName: string, employeeName: string, facilityName: string, contractStartDate: string, contractEndDate: string, contractDeposit: number, contractTotalMoney: number) {
    this.contractId = contractId;
    this.contractCode = contractCode;
    this.customerName = customerName;
    this.employeeName = employeeName;
    this.facilityName = facilityName;
    this.contractStartDate = contractStartDate;
    this.contractEndDate = contractEndDate;
    this.contractDeposit = contractDeposit;
    this.contractTotalMoney = contractTotalMoney;
  }
}
