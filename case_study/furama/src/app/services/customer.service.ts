import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerType} from "../model/customer-type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICustomer} from "../model/ICustomer";
import {ICustomerType} from "../model/ICustomerType";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  BACKEND_LIST = 'http://localhost:8080/api/list-customer'
  BACKEND_DELETE = 'http://localhost:8080/api/customer/'
  BACKEND_BY_ID = 'http://localhost:8080/api/get/'
  BACKEND_CREATE = 'http://localhost:8080/api/create-customer'
  BACKEND_UPDATE = 'http://localhost:8080/api/update-customer/'
  BACKEND_LIST_TYPE = 'http://localhost:8080/api/list-customer-type'
  URL_LIST = 'http://localhost:3000/customer';
  URL_LIST_TYPE = 'http://localhost:3000/customerType';
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

  postCustomer(data: any) {
    console.log(data)
    // return this.http.post<any>(this.URL_LIST, data);
    return this.http.post<any>(this.BACKEND_CREATE,data);
  }

  getAllCustomer(): Observable<ICustomer[]> {
    // return this.http.get<ICustomer[]>(this.URL_LIST);
    return this.http.get<ICustomer[]>(this.BACKEND_LIST);

  }

  getAllCustomerType(): Observable<ICustomerType[]> {
    // return this.http.get<ICustomerType[]>(this.URL_LIST_TYPE);
    return this.http.get<ICustomerType[]>(this.BACKEND_LIST_TYPE);
  }

  getCreateCustomer(data) { // Add Customer
    // return this.http.post<ICustomer[]>(`${this.URL_LIST}`, data);
    return this.http.post<ICustomer[]>(`${this.BACKEND_LIST}`, data);
  }

  getCustomerById(id) { // findById Customer
    // return this.http.get<Customer>(`${this.URL_LIST}/${id}`);
    return this.http.get<Customer>(this.BACKEND_BY_ID + id);
  }

  deleteCustomer(id) { // Delete Customer
    // return this.http.delete<any>(`${this.URL_LIST}/${id}`);
    return this.http.delete<any>(this.BACKEND_DELETE + id);
  }

  updateCustomer(data: any) {
    console.log(data);
    // return this.http.put<any>(`http://localhost:3000/customer/${data.id}`, data);
    return this.http.put<any>(this.BACKEND_UPDATE + data.id, data);
  }
}
