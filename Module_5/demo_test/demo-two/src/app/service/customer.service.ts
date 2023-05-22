import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly URI: string = 'http://localhost:3000/customers'

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.URI);
  }

  findByIdCustomer(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.URI + '/' + id);
  }
}
