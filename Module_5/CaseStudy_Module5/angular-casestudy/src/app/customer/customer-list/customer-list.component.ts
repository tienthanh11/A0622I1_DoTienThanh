import {Component, OnInit} from '@angular/core';
import {ICustomerType} from "../../model/icustomer-type";
import {CustomerTypeService} from "../../service/customer-type.service";
import {CustomerService} from "../../service/customer.service";
import {ICustomer} from "../../model/icustomer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: ICustomer[] = [];
  customerTypes: ICustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customers = this.customerService.getAllCustomer();

    this.customerTypes = this.customerTypeService.getAllCustomerType();
  }
}
