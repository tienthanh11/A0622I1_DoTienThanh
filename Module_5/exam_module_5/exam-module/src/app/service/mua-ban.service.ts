import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MuaBan} from "../model/mua-ban";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MuaBanService {

  readonly URI: string = 'http://localhost:3000/mua-bans'

  constructor(private httpClient: HttpClient) {
  }

  getAllMuaBan(): Observable<MuaBan[]> {
    return this.httpClient.get<MuaBan[]>(this.URI);
  }

  createMuaBan(muaBans: MuaBan): Observable<void> {
    return this.httpClient.post<void>(this.URI, muaBans);
  }

  searchMuaBan(dienTich: string, huong: string, gia: string): Observable<MuaBan[]> {
    return this.httpClient.get<MuaBan[]>(this.URI + '?dienTich=' + dienTich + '&huong=' + huong + '&gia=' + gia);
  }
}
