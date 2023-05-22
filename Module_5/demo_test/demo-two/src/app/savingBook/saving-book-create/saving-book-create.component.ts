import {Component, OnInit} from '@angular/core';
import {SavingBook} from "../../model/saving-book";
import {Customer} from "../../model/customer";
import {SavingBookService} from "../../service/saving-book.service";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-saving-book-create',
  templateUrl: './saving-book-create.component.html',
  styleUrls: ['./saving-book-create.component.css']
})
export class SavingBookCreateComponent implements OnInit {

  savingBookFormCreate: FormGroup;
  customers: Customer[] = [];

  constructor(private savingBookService: SavingBookService,
              private customerService: CustomerService,
              private router: Router,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe((data) => {
      this.customers = data;
    })

    this.savingBookFormCreate = new FormGroup({
      id: new FormControl('', [Validators.required]),
      customer: new FormControl('', [Validators.required]),
      openingDay: new FormControl('', [Validators.required]),
      startDay: new FormControl('', [Validators.required]),
      period: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required]),
      interestRate: new FormControl('', [Validators.required]),
    })
  }

  createSavingBook() {
    this.savingBookService.createSavingBook(this.savingBookFormCreate.value).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.toast.success("Thêm mới khách hàng thành công", "Success");
        this.router.navigateByUrl('');
      }
    );
  }
}
