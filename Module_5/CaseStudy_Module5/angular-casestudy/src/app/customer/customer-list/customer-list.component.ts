import {Component, OnInit} from '@angular/core';
import {ICustomerType} from "../../model/icustomer-type";
import {CustomerTypeService} from "../../service/customer-type.service";
import {CustomerService} from "../../service/customer.service";
import {ICustomer} from "../../model/icustomer";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: ICustomer[] = [];
  customerTypes: ICustomerType[] = [];
  customerDelete: ICustomer = {
    type: {}
  };

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAllCustomer().subscribe((data) => {
      this.customers = data;
    });

    this.customerTypeService.getAllCustomerType().subscribe((data) => {
      this.customerTypes = data;
    });
  }

  showInfo(customer: ICustomer) {
    this.customerDelete = customer;
  }

  delete(id: string) {
    this.customerService.deleteCustomer(id).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.toast.success("Xóa khách hàng thành công");
        this.getAll();
      }
    );
  }
}
