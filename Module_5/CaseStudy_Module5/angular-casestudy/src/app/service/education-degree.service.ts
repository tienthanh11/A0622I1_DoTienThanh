import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IEducationDegree} from "../model/ieducation-degree";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EducationDegreeService {

  readonly URI: string = 'http://localhost:3000/educationDegrees'

  constructor(private httpClient: HttpClient) { }

  getAllEducationDegree(): Observable<IEducationDegree[]>{
    return this.httpClient.get<IEducationDegree[]>(this.URI);
  }

  findByIdEducationDegree(id: string): Observable<IEducationDegree>{
    return this.httpClient.get<IEducationDegree>(this.URI + '/' + id);
  }
}
