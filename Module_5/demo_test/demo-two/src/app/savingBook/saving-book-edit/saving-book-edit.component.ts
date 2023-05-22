import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../model/customer";
import {SavingBookService} from "../../service/saving-book.service";
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-saving-book-edit',
  templateUrl: './saving-book-edit.component.html',
  styleUrls: ['./saving-book-edit.component.css']
})
export class SavingBookEditComponent implements OnInit {

  savingBookFormEdit: FormGroup;
  id: number;
  customers: Customer[] = [];

  constructor(private savingBookService: SavingBookService,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe((data) => {
      this.customers = data;
    })

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.savingBookService.findByIdSavingBook(this.id).subscribe((savingBookEdit) => {
        this.savingBookFormEdit = new FormGroup({
          id: new FormControl(savingBookEdit.id, [Validators.required]),
          customer: new FormControl(savingBookEdit.customer.id, [Validators.required]),
          openingDay: new FormControl(savingBookEdit.openingDay, [Validators.required]),
          startDay: new FormControl(savingBookEdit.startDay, [Validators.required]),
          period: new FormControl(savingBookEdit.period, [Validators.required]),
          deposit: new FormControl(savingBookEdit.deposit, [Validators.required]),
          interestRate: new FormControl(savingBookEdit.interestRate, [Validators.required]),
        })
      })
    })
  }

  editSavingBook(id: number) {
    this.customerService.findByIdCustomer(this.savingBookFormEdit.get('customer').value).subscribe(
      (data) => {
        this.savingBookFormEdit.patchValue({
          customer: data
        })
      },
      () => {
      },
      () => {
        this.savingBookService.updateSavingBook(id, this.savingBookFormEdit.value).subscribe(
          () => {
          },
          () => {
          },
          () => {
            this.toast.success('Sửa thành công', 'Success');
            this.router.navigateByUrl('');
          }
        );
      }
    );
  }
}
