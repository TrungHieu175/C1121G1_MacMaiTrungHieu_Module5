import {ICustomerType} from "../model/ICustomerType";

export interface CustomerDto {
  id?: number;
  customerCode?: string;
  customerName: string;
  customerBirthday: string;
  customerGender: string;
  customerIdCard: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  customerType: number;
}
