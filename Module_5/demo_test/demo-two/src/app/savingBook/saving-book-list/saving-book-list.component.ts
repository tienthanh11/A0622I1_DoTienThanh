import {Component, OnInit} from '@angular/core';
import {SavingBook} from "../../model/saving-book";
import {SavingBookService} from "../../service/saving-book.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup} from "@angular/forms";
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-saving-book-list',
  templateUrl: './saving-book-list.component.html',
  styleUrls: ['./saving-book-list.component.css']
})
export class SavingBookListComponent implements OnInit {

  savingBooks: SavingBook[] = [];
  customers: Customer[] = [];
  savingBookDelete: SavingBook = {
    customer: {}
  }
  savingBookSearch: FormGroup;

  constructor(private savingBookService: SavingBookService,
              private customerService: CustomerService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.savingBookSearch = new FormGroup({
      name: new FormControl(''),
      startDay: new FormControl(''),
      deposit: new FormControl('')
    });
    this.getAll();
  }

  getAll() {
    this.savingBookService.getAllSavingBook().subscribe((data) => {
      this.savingBooks = data;
    })

    this.customerService.getAllCustomer().subscribe((data) => {
      this.customers = data;
    })
  }

  showInfo(savingBook: SavingBook) {
    this.savingBookDelete = savingBook;
  }

  delete(id: number) {
    this.savingBookService.deleteSavingBook(id).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.toast.success("Xóa thành công", "Success");
        this.getAll();
      }
    );
  }

  search() {
    this.savingBookService.searchSavingBook(
      this.savingBookSearch.get('name').value,
      this.savingBookSearch.get('startDay').value,
      this.savingBookSearch.get('deposit').value
    ).subscribe(
      (data) => {
        this.savingBooks = data;
      }
    )
  }
}
