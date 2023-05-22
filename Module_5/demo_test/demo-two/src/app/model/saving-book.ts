import {Customer} from "./customer";

export interface SavingBook {
  id?: number;
  customer?: Customer;
  openingDay?: string;
  startDay?: string;
  period?: string;
  deposit?: number;
  interestRate?: number;
}
