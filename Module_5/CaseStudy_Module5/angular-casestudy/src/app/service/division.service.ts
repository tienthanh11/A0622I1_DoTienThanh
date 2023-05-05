import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDivision} from "../model/idivision";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  readonly URI: string = 'http://localhost:3000/divisions'

  constructor(private httpClient: HttpClient) {
  }

  getAllDivision(): Observable<IDivision[]> {
    return this.httpClient.get<IDivision[]>(this.URI);
  }

  findByIdDivision(id: string): Observable<IDivision> {
    return this.httpClient.get<IDivision>(this.URI + '/' + id);
  }
}
