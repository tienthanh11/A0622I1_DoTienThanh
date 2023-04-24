import { Injectable } from '@angular/core';
import {CustomerTypeDAO} from "../data/CustomerTypeDAO";
import {CustomerDAO} from "../data/CustomerDAO";
import {ICustomerType} from "../model/icustomer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor() { }

  getAllCustomerType() {
    return CustomerTypeDAO.customerTypes;
  }

  findByIdCustomerType(id: string): ICustomerType {
    return CustomerTypeDAO.customerTypes.find(customerType => customerType.id === +id);
  }
}
