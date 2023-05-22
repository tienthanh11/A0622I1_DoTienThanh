import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Package} from "../model/package";

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  readonly URI: string = 'http://localhost:3000/packages'

  constructor(private httpClient: HttpClient) {
  }

  getAllPackage(): Observable<Package[]> {
    return this.httpClient.get<Package[]>(this.URI);
  }

  createPackage(packages: Package): Observable<void> {
    return this.httpClient.post<void>(this.URI, packages);
  }

  deletePackage(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }

  searchPackage(name: string, endDate: string): Observable<Package[]> {
    // if (dateProduct1 == '' || dateProduct2 == '') {
      return this.httpClient.get<Package[]>(this.URI + '?product.id_like=' + name + '&endDate_like=' + endDate);
    // }
    // return this.httpClient.get<Package[]>(this.URI + '?product.id_like=' + name + '&endDate_like=' + endDate + '&dateProduct_gte=' + dateProduct1 + '&dateProduct_lte=' + dateProduct2);
  }
}
