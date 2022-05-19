
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CustomerType} from "../model/customer-type";
import {Observable} from "rxjs";
import {ICustomer} from "../model/ICustomer";
import {ICustomerType} from "../model/ICustomerType";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {


  URL_LIST_TYPE = 'http://localhost:3000/customerType';

  private customerTypes: CustomerType[];

  constructor(private http: HttpClient) {
  }

  postProduct(data: any) {
    return this.http.post<any>('http://localhost:3000/customerType/', data);
  }

  getAllCustomerType(): Observable<ICustomerType[]> {
    return this.http.get<ICustomerType[]>(this.URL_LIST_TYPE);
  }
  getCustomerTypeById(id) { // findById Customer
    return this.http.get<ICustomerType>(`${this.URL_LIST_TYPE}/${id}`);
  }
}
