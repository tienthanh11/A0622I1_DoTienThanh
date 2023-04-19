import { Injectable } from '@angular/core';
import {EmployeeDAO} from "../data/EmployeeDAO";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getAllEmployee() {
    return EmployeeDAO.employees;
  }
}
