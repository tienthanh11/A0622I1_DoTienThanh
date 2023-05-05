import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosition} from "../model/iposition";

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  readonly URI: string = 'http://localhost:3000/positions'

  constructor(private httpClient: HttpClient) {
  }

  getAllPosition(): Observable<IPosition[]> {
    return this.httpClient.get<IPosition[]>(this.URI);
  }

  findByIdPosition(id: string): Observable<IPosition> {
    return this.httpClient.get<IPosition>(this.URI + '/' + id);
  }
}
