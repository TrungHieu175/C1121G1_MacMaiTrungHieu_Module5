import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITrangThai} from "../model/iTrangThai";
import {IBaiDang} from "../model/iBaiDang";

@Injectable({
  providedIn: 'root'
})
export class BaiDangService {

  BACKEND_LIST = 'http://localhost:8080/api/list-customer'
  BACKEND_DELETE = 'http://localhost:8080/api/customer/'
  BACKEND_BY_ID = 'http://localhost:8080/api/get/'
  BACKEND_CREATE = 'http://localhost:8080/api/create-customer'
  BACKEND_UPDATE = 'http://localhost:8080/api/update-customer/'
  BACKEND_LIST_TYPE = 'http://localhost:8080/api/list-customer-type'
  URL_LIST = 'http://localhost:3000/customer/';
  URL_LIST_TYPE = 'http://localhost:3000/customerType';

  constructor(private http: HttpClient) {
  }

  postCustomer(data: any) {
    console.log(data)
    // return this.http.post<any>(this.URL_LIST, data);
    return this.http.post<any>(this.BACKEND_CREATE,data);
  }

  getAllCustomer(): Observable<IBaiDang[]> {
    // return this.http.get<IBaiDang[]>(this.URL_LIST);
    return this.http.get<IBaiDang[]>(this.BACKEND_LIST);
  }

  getAllCustomerType(): Observable<ITrangThai[]> {
    // return this.http.get<ITrangThai[]>(this.URL_LIST_TYPE);
    return this.http.get<ITrangThai[]>(this.BACKEND_LIST_TYPE);
  }

  getCreateCustomer(data) { // Add IBaiDang
    // return this.http.post<IBaiDang[]>(`${this.URL_LIST}`, data);
    return this.http.post<IBaiDang[]>(`${this.BACKEND_LIST}`, data);
  }

  getCustomerById(id) { // findById IBaiDang
    // return this.http.get<IBaiDang>(`${this.URL_LIST}/${id}`);
    return this.http.get<IBaiDang>(this.BACKEND_BY_ID + id);
  }

  deleteCustomer(id) { // Delete IBaiDang
    // return this.http.delete<any>(`${this.URL_LIST}/${id}`);
    return this.http.delete<any>(this.BACKEND_DELETE + id);
  }

  updateCustomer(data: any) {
    console.log(data);
    // return this.http.put<any>(`http://localhost:3000/customer/${data.id}`, data);
    return this.http.put<any>(this.BACKEND_UPDATE + data.id, data);
  }
}
