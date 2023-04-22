import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ICustomerType} from "../../model/icustomer-type";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerFormEdit: FormGroup;
  id: string;
  customerTypes: ICustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.customerTypes = this.customerTypeService.getAllCustomerType();

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      const customerEdit = this.customerService.findByIdCustomer(this.id);
      this.customerFormEdit = new FormGroup({
        id: new FormControl(customerEdit.id, [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
        type: new FormControl(customerEdit.type.id, [Validators.required]),
        name: new FormControl(customerEdit.name, [Validators.required, Validators.pattern('^\\D*$')]),
        birthday: new FormControl(customerEdit.birthday, [Validators.required]),
        gender: new FormControl(customerEdit.gender, [Validators.required]),
        idCard: new FormControl(customerEdit.idCard, [Validators.required, Validators.pattern('(^\\d{9}$)|(^\\d{12}$)')]),
        phone: new FormControl(customerEdit.phone, [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$')]),
        email: new FormControl(customerEdit.email, [Validators.required, Validators.email]),
        address: new FormControl(customerEdit.address, [Validators.required]),
      });
    });
  }
}
