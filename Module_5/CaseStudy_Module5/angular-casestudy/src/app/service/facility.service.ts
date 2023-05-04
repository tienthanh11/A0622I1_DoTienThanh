import {Injectable} from '@angular/core';
import {IFacility} from "../model/ifacility";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  readonly URI: string = 'http://localhost:3000/facilities'

  constructor(private httpClient: HttpClient) {
  }

  getAllFacility(): Observable<IFacility[]> {
    return this.httpClient.get<IFacility[]>(this.URI);
  }

  createFacility(facility: IFacility): Observable<void> {
    return this.httpClient.post<void>(this.URI, facility);
  }

  findByIdFacility(id: string): Observable<IFacility> {
    return this.httpClient.get(this.URI + '/' + id);
  }

  updateFacility(id: string, facility: IFacility): Observable<IFacility> {
    return this.httpClient.put<IFacility>(`${this.URI}/${id}`, facility);
  }

  deleteFacility(id: string) {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }
}
