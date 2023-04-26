import { Injectable } from '@angular/core';
import {DivisionDAO} from "../data/DivisionDAO";
import {EducationDegreeDAO} from "../data/EducationDegreeDAO";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor() { }

  getAllDivision() {
    return DivisionDAO.divisions;
  }

  findByIdDivision(id: string) {
    return DivisionDAO.divisions.find(division => division.id === +id);
  }
}
