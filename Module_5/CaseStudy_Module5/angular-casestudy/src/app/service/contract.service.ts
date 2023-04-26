import { Injectable } from '@angular/core';
import {ContractDAO} from "../data/ContractDAO";
import {IContract} from "../model/icontract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor() { }

  getAllContract() {
    return ContractDAO.contacts;
  }

  createContract(contract: IContract) {
    ContractDAO.contacts.push(contract);
  }
}
