import {Injectable} from '@angular/core';
import {IEmployee} from "../model/iemployee";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICustomer} from "../model/icustomer";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly URI: string = 'http://localhost:3000/employees'

  constructor(private httpClient: HttpClient) {
  }

  getAllEmployee(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(this.URI);
  }

  createEmployee(employee: IEmployee): Observable<void> {
    return this.httpClient.post<void>(this.URI, employee);
  }

  findByIdEmployee(id: string): Observable<IEmployee> {
    return this.httpClient.get<IEmployee>(this.URI + '/' + id);
  }

  updateEmployee(id: string, employee: IEmployee): Observable<IEmployee> {
    return this.httpClient.put<IEmployee>(`${this.URI}/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }

  searchEmployee(name: string, email: string, divisionId: string): Observable<IEmployee[]> {
    return this.httpClient.get<ICustomer[]>(this.URI + '?name_like=' + name + '&email_like=' + email + '&division.id_like=' + divisionId);
  }
}
