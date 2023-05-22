import { Component, OnInit } from '@angular/core';
import {MuaBan} from "../../model/mua-ban";
import {MuaBanService} from "../../service/mua-ban.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-mua-ban-list',
  templateUrl: './mua-ban-list.component.html',
  styleUrls: ['./mua-ban-list.component.css']
})
export class MuaBanListComponent implements OnInit {

  muaBans: MuaBan[] = [];
  muaBanSearch: FormGroup;

  constructor(private muaBanService: MuaBanService) { }

  ngOnInit(): void {
    this.muaBanSearch = new FormGroup({
      dienTich: new FormControl(''),
      huong: new FormControl(''),
      gia: new FormControl('')
    })
    this.getAll();
  }

  getAll() {
    this.muaBanService.getAllMuaBan().subscribe((data) => {
      this.muaBans = data;
    })
  }

  search() {
    this.muaBanService.searchMuaBan(
      this.muaBanSearch.get('dienTich').value,
      this.muaBanSearch.get('huong').value,
      this.muaBanSearch.get('gia').value
    ).subscribe(
      (data) => {
        this.muaBans = data;
      }
    )
  }
}
