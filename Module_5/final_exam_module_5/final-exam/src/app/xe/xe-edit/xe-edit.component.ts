import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {XeTypeService} from "../../service/xe-type.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {XeType} from "../../model/xe-type";
import {XeService} from "../../service/xe.service";
import {Xe} from "../../model/xe";

@Component({
  selector: 'app-xe-edit',
  templateUrl: './xe-edit.component.html',
  styleUrls: ['./xe-edit.component.css']
})
export class XeEditComponent implements OnInit {

  xeFormEdit: FormGroup;
  id: number;
  xeTypes: XeType[] = [];

  constructor(private xeService: XeService,
              private xeTypeService: XeTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.xeTypeService.getAllXeType().subscribe((data) => {
      this.xeTypes = data;
    })

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.xeService.findByIdXe(this.id).subscribe((xeEdit) => {
        this.xeFormEdit = new FormGroup({
          id: new FormControl(xeEdit.id, [Validators.required]),
          tenType: new FormControl(xeEdit.tenType.id, [Validators.required]),
          tenNhaXe: new FormControl(xeEdit.tenNhaXe, [Validators.required]),
          diemDi: new FormControl(xeEdit.diemDi, [Validators.required]),
          diemDen: new FormControl(xeEdit.diemDen, [Validators.required]),
          soDienThoai: new FormControl(xeEdit.soDienThoai, [Validators.required, Validators.pattern('^09[0,3,7][0-9]{7}$')]),
          email: new FormControl(xeEdit.email, [Validators.required, Validators.email]),
          gioDi: new FormControl(xeEdit.gioDi, [Validators.required]),
          gioDen: new FormControl(xeEdit.gioDen, [Validators.required]),
        })
      })
    })
  }

  editXe(id: number) {
    this.xeTypeService.findByIdXeType(this.xeFormEdit.get('tenType').value).subscribe(
      (data) => {
        this.xeFormEdit.patchValue({
          tenType: data
        });
      },
      () => {
      },
      () => {
        this.xeService.updateXe(id, this.xeFormEdit.value).subscribe(
          () => {
          },
          () => {
          },
          () => {
            this.toast.success("Sửa thành công");
            this.router.navigateByUrl('');
          }
        );
      }
    );
  }
}
