import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Xe} from "../model/xe";

@Injectable({
  providedIn: 'root'
})
export class XeService {

  readonly URI: string = 'http://localhost:3000/xes'

  constructor(private httpClient: HttpClient) {
  }

  getAllXe(): Observable<Xe[]> {
    return this.httpClient.get<Xe[]>(this.URI);
  }

  findByIdXe(id: number): Observable<Xe> {
    return this.httpClient.get<Xe>(this.URI + '/' + id);
  }

  updateXe(id: number, xe: Xe): Observable<Xe> {
    return this.httpClient.put<Xe>(`${this.URI}/${id}`, xe);
  }

  deleteXe(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }
}
