import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MuaBanService} from "../../service/mua-ban.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-mua-ban-create',
  templateUrl: './mua-ban-create.component.html',
  styleUrls: ['./mua-ban-create.component.css']
})
export class MuaBanCreateComponent implements OnInit {

  muaBanForm: FormGroup;

  constructor(private muaBanService: MuaBanService,
              private router: Router,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.muaBanForm = new FormGroup({
      id: new FormControl('', ),
      danhMuc: new FormControl('', ),
      vungMien: new FormControl('', ),
      donVi: new FormControl('', ),
      dangTin: new FormControl('', ),
      trinhTrang: new FormControl('', ),
      diaChi: new FormControl('', [Validators.required]),
      dienTich: new FormControl('', [Validators.required, Validators.min(20)]),
      huong: new FormControl('', ),
      tieuDe: new FormControl('', [Validators.required]),
      noiDung: new FormControl('', [Validators.required]),
      gia: new FormControl('', [Validators.required, Validators.min(100000000)]),
      hinhAnh: new FormControl('', ),
      ngayDang: new FormControl('', ),
      trangThai: new FormControl('', ),
    })
  }

  createMuaBan() {
    this.muaBanService.createMuaBan(this.muaBanForm.value).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.toast.success("Thêm mới thành công");
        this.router.navigateByUrl('');
      }
    );
  }
}
