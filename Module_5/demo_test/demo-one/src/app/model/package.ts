import {Product} from "./product";

export interface Package {
  id?: number;
  idPackage?: string;
  product?: Product;
  quantity?: number;
  dateProduct?: string;
  startDate?: string;
  endDate?: string;
}
