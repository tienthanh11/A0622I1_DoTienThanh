import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ICustomerType} from "../../model/icustomer-type";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerFormCreate: FormGroup;
  customerTypes: ICustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) { }

  ngOnInit(): void {
    this.customerTypes = this.customerTypeService.getAllCustomerType();

    this.customerFormCreate = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      type: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.pattern('^\\D*$')]),
      birthday: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('(^\\d{9}$)|(^\\d{12}$)')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
    });
  }

  createCustomer() {
    this.customerService.createCustomer(this.customerFormCreate.value);
    this.router.navigateByUrl('customer/list');
  }
}
