import {Injectable} from '@angular/core';
import {ICustomer} from "../model/icustomer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly URI: string = 'http://localhost:3000/customers'
  // readonly URI: string = 'http://localhost:8080'

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<ICustomer[]> {
    return this.httpClient.get<ICustomer[]>(this.URI);
  }

  createCustomer(customer: ICustomer): Observable<void> {
    return this.httpClient.post<void>(this.URI, customer);
  }

  findByIdCustomer(id: string): Observable<ICustomer> {
    return this.httpClient.get<ICustomer>(this.URI + '/' + id);
  }

  updateCustomer(id: string, customer: ICustomer): Observable<ICustomer> {
    return this.httpClient.put<ICustomer>(`${this.URI}/${id}`, customer);
  }

  deleteCustomer(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }

  searchCustomer(name: string, email: string, typeId: string): Observable<ICustomer[]> {
    return this.httpClient.get<ICustomer[]>(this.URI + '?name_like=' + name + '&email_like=' + email + '&type.id_like=' + typeId);
  }
}
