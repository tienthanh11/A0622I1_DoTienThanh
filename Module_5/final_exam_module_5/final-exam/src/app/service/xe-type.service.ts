import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {XeType} from "../model/xe-type";

@Injectable({
  providedIn: 'root'
})
export class XeTypeService {

  readonly URI: string = 'http://localhost:3000/xe-types'

  constructor(private httpClient: HttpClient) { }

  getAllXeType(): Observable<XeType[]> {
    return this.httpClient.get<XeType[]>(this.URI);
  }

  findByIdXeType(id: number): Observable<XeType> {
    return this.httpClient.get<XeType>(this.URI + '/' + id);
  }
}
