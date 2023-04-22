import {IPosition} from "./iposition";
import {IEducationDegree} from "./ieducation-degree";
import {IDivision} from "./idivision";

export interface IEmployee {
  id?: string;
  name?: string;
  birthday?: string;
  idCard?: string;
  salary?: number;
  phone?: string;
  email?: string;
  address?: string;
  position?: IPosition;
  educationDegree?: IEducationDegree;
  division?: IDivision;
}
