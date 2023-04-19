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
}
