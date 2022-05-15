import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerType} from "../model/customer-type";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // private vip: CustomerType;
  // private normal: CustomerType;
  public getCustomerList() {
    // let customerList: Customer[];
    // this.vip =new CustomerType(1,"Vip")
    // this.normal = new CustomerType(1,"Normal")
    // customerList =  [
    //   new Customer(1, 'KH-0001', 'Ngô Bá Khá' , '04-12-1998', 'Nam' , '2039485938', '0901857392', 'khavippro@gmail.com', '124 Ngyễn Trãi,Phú Thọ',this.vip),
    //   new Customer(2, 'KH-0002', 'Huỳnh Văn Bánh' , '31-12-1990', 'Nam' , '2039675128', '0909787739', 'banhxe@gmail.com', '342 Lê Lợi, Hà Nội', this.normal),
    //   new Customer(3, 'KH-0003', 'Dương Minh Tuyền' , '12-05-1989', 'Nam' , '2039485938', '0901857392', 'tuyen.mom@gmail.com', '342 Hai Bà Trưng, Hà Nội', this.vip),
    //   new Customer(4, 'KH-0004', 'Trương Văn Cam' , '12-05-1974', 'Nam' , '3199679999', '09096049171', 'Cam.giam.gia@gmail.com', '342 Phố Hàng Đậu, Hà Nội', this.normal)
    // ];
    // return customerList;
  }

  constructor(private http: HttpClient) {
  }

  postProduct(data: any) {
    return this.http.post<any>('http://localhost:3000/customer/', data);
  }

  getAllProducts() {
    return this.http.get<any>('http://localhost:3000/customer');
  }

  putProduct(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/customer/' + id, data);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>('http://localhost:3000/customer/' + id);
  }
}
