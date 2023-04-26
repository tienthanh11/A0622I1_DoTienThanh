import { Injectable } from '@angular/core';
import {EducationDegreeDAO} from "../data/EducationDegreeDAO";

@Injectable({
  providedIn: 'root'
})
export class EducationDegreeService {

  constructor() { }

  getAllEducationDegree() {
    return EducationDegreeDAO.educationDegrees;
  }

  findByIdEducationDegree(id: string) {
    return EducationDegreeDAO.educationDegrees.find(educationDegree => educationDegree.id === +id);
  }
}
