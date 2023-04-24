import { Injectable } from '@angular/core';
import {EmployeeDAO} from "../data/EmployeeDAO";
import {IEmployee} from "../model/iemployee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getAllEmployee() {
    return EmployeeDAO.employees;
  }

  createEmployee(employee: IEmployee) {
    EmployeeDAO.employees.push(employee);
  }
}
