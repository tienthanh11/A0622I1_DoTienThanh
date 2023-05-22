import {Component, OnInit} from '@angular/core';
import {PackageService} from "../../service/package.service";
import {ProductService} from "../../service/product.service";
import {Package} from "../../model/package";
import {Product} from "../../model/product";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  packages: Package[] = [];
  products: Product[] = [];
  packageTemp: Package = {
    product: {}
  };
  packageSearch: FormGroup;
  page: number = 1;
  totalLength: number;


  constructor(private packageService: PackageService,
              private productService: ProductService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.packageSearch = new FormGroup({
      productId: new FormControl(''),
      endDate: new FormControl(''),
      dateProduct1: new FormControl(''),
      dateProduct2: new FormControl('')
    });
    this.getAll();
  }

  getAll() {
    this.packageService.getAllPackage().subscribe((data) => {
      this.packages = data;
      this.totalLength = data.length;
    });

    this.productService.getAllProduct().subscribe((data) => {
      this.products = data;
    });
  }

  showInfo(packages: Package) {
    this.packageTemp = packages;
  }

  delete(id: number) {
    this.packageService.deletePackage(id).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.toast.success("Xoá thành công");
        this.getAll();
      }
    );
  }

  searchPackage() {
    this.packageService.searchPackage(
      this.packageSearch.get('productId').value,
      this.packageSearch.get('endDate').value,
      // this.packageSearch.get('dateProduct1').value,
      // this.packageSearch.get('dateProduct2').value
    ).subscribe(
      (data) => {
        this.packages = data;
        this.totalLength = data.length;
        this.page = 1;
      }
    );
  }
}
