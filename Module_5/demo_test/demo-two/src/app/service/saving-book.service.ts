import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SavingBook} from "../model/saving-book";

@Injectable({
  providedIn: 'root'
})
export class SavingBookService {

  readonly URI: string = 'http://localhost:3000/saving-books'

  constructor(private httpClient: HttpClient) {
  }

  getAllSavingBook(): Observable<SavingBook[]> {
    return this.httpClient.get<SavingBook[]>(this.URI);
  }

  createSavingBook(savingBook: SavingBook): Observable<void> {
    return this.httpClient.post<void>(this.URI, savingBook);
  }

  findByIdSavingBook(id: number): Observable<SavingBook> {
    return this.httpClient.get<SavingBook>(this.URI + '/' + id);
  }

  updateSavingBook(id: number, savingBook: SavingBook): Observable<SavingBook> {
    return this.httpClient.put<SavingBook>(`${this.URI}/${id}`, savingBook);
  }

  deleteSavingBook(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }

  searchSavingBook(name: string, startDay: string, deposit: string): Observable<SavingBook[]> {
    return this.httpClient.get<SavingBook[]>(this.URI + '?customer.id_like=' + name + '&startDay_like=' + startDay + '&deposit_like=' + deposit);
  }
}
