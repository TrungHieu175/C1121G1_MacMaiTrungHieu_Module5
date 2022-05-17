
import {ICustomerType} from "./ICustomerType";

export interface ICustomer {
  id?: number;
  customerCode?: string;
  customerName: string;
  customerBirthday: string;
  customerGender: string;
  customerIdCard: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  customerType: ICustomerType;
}
