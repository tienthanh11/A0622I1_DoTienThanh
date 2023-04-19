import { Injectable } from '@angular/core';
import {EmployeeDAO} from "../data/EmployeeDAO";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getAllCustomer() {
    return EmployeeDAO.employees;
  }
}
