import { Injectable } from '@angular/core';
import {DivisionDAO} from "../data/DivisionDAO";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor() { }

  getAllDivision() {
    return DivisionDAO.divisions;
  }
}
