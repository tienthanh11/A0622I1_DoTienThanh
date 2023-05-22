import {Component, OnInit} from '@angular/core';
import {Xe} from "../../model/xe";
import {XeType} from "../../model/xe-type";
import {XeService} from "../../service/xe.service";
import {XeTypeService} from "../../service/xe-type.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-xe-list',
  templateUrl: './xe-list.component.html',
  styleUrls: ['./xe-list.component.css']
})
export class XeListComponent implements OnInit {

  xes: Xe[] = [];
  xeTypes: XeType[] = [];
  xeDelete: Xe = {
    tenType: {}
  };

  constructor(private xeService: XeService,
              private xeTypeService: XeTypeService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.xeService.getAllXe().subscribe((data) => {
      this.xes = data;
    })

    this.xeTypeService.getAllXeType().subscribe((data) => {
      this.xeTypes = data;
    })
  }


  showInfo(xe: Xe) {
    this.xeDelete = xe;
  }

  delete(id: number) {
    this.xeService.deleteXe(id).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.toast.success("Xoá thành công");
        this.getAll();
      }
    )
  }
}
