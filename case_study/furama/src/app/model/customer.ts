import {CustomerType} from "./customer-type";

export class Customer {
  private _customerId: number;
  private _customerCode: string;
  private _customerName: string;
  private _customerBirthday: string;
  private _customerGender: string;
  private _customerIdCard: string;
  private _customerPhone: string;
  private _customerEmail: string;
  private _customerAddress: string;
  private _customerType: CustomerType;


  constructor(customerId: number, customerCode: string, customerName: string, customerBirthday: string, customerGender: string, customerIdCard: string, customerPhone: string, customerEmail: string, customerAddress: string, customerType: CustomerType) {
    this._customerId = customerId;
    this._customerCode = customerCode;
    this._customerName = customerName;
    this._customerBirthday = customerBirthday;
    this._customerGender = customerGender;
    this._customerIdCard = customerIdCard;
    this._customerPhone = customerPhone;
    this._customerEmail = customerEmail;
    this._customerAddress = customerAddress;
    this._customerType = customerType;
  }

  get customerId(): number {
    return this._customerId;
  }

  set customerId(value: number) {
    this._customerId = value;
  }

  get customerCode(): string {
    return this._customerCode;
  }

  set customerCode(value: string) {
    this._customerCode = value;
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
  }

  get customerBirthday(): string {
    return this._customerBirthday;
  }

  set customerBirthday(value: string) {
    this._customerBirthday = value;
  }

  get customerGender(): string {
    return this._customerGender;
  }

  set customerGender(value: string) {
    this._customerGender = value;
  }

  get customerIdCard(): string {
    return this._customerIdCard;
  }

  set customerIdCard(value: string) {
    this._customerIdCard = value;
  }

  get customerPhone(): string {
    return this._customerPhone;
  }

  set customerPhone(value: string) {
    this._customerPhone = value;
  }

  get customerEmail(): string {
    return this._customerEmail;
  }

  set customerEmail(value: string) {
    this._customerEmail = value;
  }

  get customerAddress(): string {
    return this._customerAddress;
  }

  set customerAddress(value: string) {
    this._customerAddress = value;
  }

  get customerType(): CustomerType {
    return this._customerType;
  }

  set customerType(value: CustomerType) {
    this._customerType = value;
  }
}
