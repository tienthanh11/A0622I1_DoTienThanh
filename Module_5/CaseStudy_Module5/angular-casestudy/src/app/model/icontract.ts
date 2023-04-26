import {ICustomer} from "./icustomer";
import {IEmployee} from "./iemployee";
import {IFacility} from "./ifacility";

export interface IContract {
  id?: string;
  startDate?: string;
  endDate?: string;
  deposit?: number;
  totalMoney?: number;
  customer?: ICustomer;
  employee?: IEmployee;
  facility?: IFacility;
}
