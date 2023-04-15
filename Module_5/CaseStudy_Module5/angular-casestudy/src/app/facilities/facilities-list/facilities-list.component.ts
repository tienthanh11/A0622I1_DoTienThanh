import { Component, OnInit } from '@angular/core';
import {IFacility} from "../../model/ifacility";

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {

  facilities: IFacility[] = [];

  constructor(private ) { }

  ngOnInit(): void {
  }

}
