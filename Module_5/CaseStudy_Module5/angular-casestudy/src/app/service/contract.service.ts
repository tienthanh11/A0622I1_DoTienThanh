import {Injectable} from '@angular/core';
import {IContract} from "../model/icontract";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  readonly URI: string = 'http://localhost:3000/contracts';

  constructor(private httpClient: HttpClient) {
  }

  getAllContract(): Observable<IContract[]> {
    return this.httpClient.get<IContract[]>(this.URI);
  }

  createContract(contract: IContract): Observable<void> {
    return this.httpClient.post<void>(this.URI, contract);
  }
}
