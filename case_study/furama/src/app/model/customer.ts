import {CustomerType} from "./customer-type";

export class Customer {
  private _Id: number;
  private _Code: string;
  private _Name: string;
  private _Birthday: string;
  private _Gender: string;
  private _IdCard: string;
  private _Phone: string;
  private _Email: string;
  private _Address: string;
  private _Type: CustomerType;


  constructor(customerId: number, customerCode: string, customerName: string, customerBirthday: string, customerGender: string, customerIdCard: string, customerPhone: string, customerEmail: string, customerAddress: string, customerType: CustomerType) {
    this._Id = customerId;
    this._Code = customerCode;
    this._Name = customerName;
    this._Birthday = customerBirthday;
    this._Gender = customerGender;
    this._IdCard = customerIdCard;
    this._Phone = customerPhone;
    this._Email = customerEmail;
    this._Address = customerAddress;
    this._Type = customerType;
  }

  get Id(): number {
    return this._Id;
  }

  set Id(value: number) {
    this._Id = value;
  }

  get Code(): string {
    return this._Code;
  }

  set Code(value: string) {
    this._Code = value;
  }

  get Name(): string {
    return this._Name;
  }

  set Name(value: string) {
    this._Name = value;
  }

  get Birthday(): string {
    return this._Birthday;
  }

  set Birthday(value: string) {
    this._Birthday = value;
  }

  get Gender(): string {
    return this._Gender;
  }

  set Gender(value: string) {
    this._Gender = value;
  }

  get IdCard(): string {
    return this._IdCard;
  }

  set IdCard(value: string) {
    this._IdCard = value;
  }

  get Phone(): string {
    return this._Phone;
  }

  set Phone(value: string) {
    this._Phone = value;
  }

  get Email(): string {
    return this._Email;
  }

  set Email(value: string) {
    this._Email = value;
  }

  get Address(): string {
    return this._Address;
  }

  set Address(value: string) {
    this._Address = value;
  }

  get Type(): CustomerType {
    return this._Type;
  }

  set Type(value: CustomerType) {
    this._Type = value;
  }
}
