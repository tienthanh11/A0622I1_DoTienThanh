import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ICustomer} from "../../model/icustomer";
import {IEmployee} from "../../model/iemployee";
import {IFacility} from "../../model/ifacility";
import {ContractService} from "../../service/contract.service";
import {CustomerService} from "../../service/customer.service";
import {EmployeeService} from "../../service/employee.service";
import {FacilityService} from "../../service/facility.service";
import {Router} from "@angular/router";
import {formatDate} from "@angular/common";
import {identityRevealedValidator} from "./custom-validate.validator";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  contractFormCreate: FormGroup;
  customers: ICustomer[] = [];
  employees: IEmployee[] = [];
  facilities: IFacility[] = [];
  date1 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private employeeService: EmployeeService,
              private facilityService: FacilityService,
              private router: Router) { }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe((data) => {
      this.customers = data;
    });

    this.employees = this.employeeService.getAllEmployee();

    this.facilityService.getAllFacility().subscribe((data) => {
      this.facilities = data;
    });

    this.contractFormCreate = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^HD-\\d{4}$')]),
      startDate: new FormControl(this.date1, [Validators.required]),
      endDate: new FormControl(this.date1, [Validators.required]),
      deposit: new FormControl('', [Validators.required, Validators.min(0)]),
      totalMoney: new FormControl('', [Validators.required, Validators.min(0)]),
      customer: new FormControl('', [Validators.required]),
      employee: new FormControl('', [Validators.required]),
      facility: new FormControl('', [Validators.required]),
    }, identityRevealedValidator);
  }

  createContract() {
    this.contractService.createContract(this.contractFormCreate.value);
    this.router.navigateByUrl('contract/list');
  }
}
