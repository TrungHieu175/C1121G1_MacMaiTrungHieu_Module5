import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITrangThai} from "../model/iTrangThai";

@Injectable({
  providedIn: 'root'
})
export class TrangThaiService {

  URL_LIST_TYPE = 'http://localhost:3000/customerType';

  constructor(private http: HttpClient) {
  }

  postProduct(data: any) {
    return this.http.post<any>('http://localhost:3000/customerType/', data);
  }

  getAllCustomerType(): Observable<ITrangThai[]> {
    return this.http.get<ITrangThai[]>(this.URL_LIST_TYPE);
  }
  getCustomerTypeById(id) { // findById Customer
    return this.http.get<ITrangThai>(`${this.URL_LIST_TYPE}/${id}`);
  }
}
