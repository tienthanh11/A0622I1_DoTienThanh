import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../model/product";
import {PackageService} from "../../service/package.service";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {identityRevealedValidator} from "../custom-validate.validator";

@Component({
  selector: 'app-package-create',
  templateUrl: './package-create.component.html',
  styleUrls: ['./package-create.component.css']
})
export class PackageCreateComponent implements OnInit {

  packageForm: FormGroup;
  products: Product[] = [];

  constructor(private packageService: PackageService,
              private productService: ProductService,
              private router: Router,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data) => {
      this.products = data;
    })

    this.packageForm = new FormGroup({
      idPackage: new FormControl(null, [Validators.required, Validators.pattern('LH-\\d{4}')]),
      product: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required, Validators.min(0)]),
      dateProduct: new FormControl(null, [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required]),
    }, identityRevealedValidator)
  }

  createPackage() {
    this.packageService.createPackage(this.packageForm.value).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.toast.success('Thêm mới thành công', 'Success');
        this.router.navigateByUrl('');
      }
    )
  }
}
