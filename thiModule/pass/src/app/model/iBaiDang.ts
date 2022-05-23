import {ITrangThai} from "./iTrangThai";

export interface IBaiDang {
  id?: number;
  customerCode?: string;
  customerName: string;
  customerBirthday: string;
  customerGender: string;
  customerIdCard: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  customerType: ITrangThai;
}
