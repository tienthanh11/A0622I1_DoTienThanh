import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-facilities-edit',
  templateUrl: './facilities-edit.component.html',
  styleUrls: ['./facilities-edit.component.css']
})
export class FacilitiesEditComponent implements OnInit {

  facilityFormEdit: FormGroup;
  id: string;

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      const facilityEdit = this.facilityService.findByIdFacility(this.id);
      this.facilityFormEdit = new FormGroup({
        id: new FormControl(facilityEdit.id, [Validators.required, Validators.pattern('^DV-\\d{4}$')]),
        name: new FormControl(facilityEdit.name, [Validators.required]),
        area: new FormControl(facilityEdit.area, [Validators.required, Validators.min(0)]),
        cost: new FormControl(facilityEdit.cost, [Validators.required, Validators.min(0)]),
        maxPeople: new FormControl(facilityEdit.maxPeople, [Validators.required, Validators.min(0)]),
        rentType: new FormControl(facilityEdit.rentType, [Validators.required]),
        serviceType: new FormControl(facilityEdit.serviceType, [Validators.required]),
        standardRoom: new FormControl(facilityEdit.standardRoom, [Validators.required]),
        description: new FormControl(facilityEdit.description, [Validators.required]),
        poolArea: new FormControl(facilityEdit.poolArea, [Validators.required, Validators.min(0)]),
        numberOfFloor: new FormControl(facilityEdit.numberOfFloor, [Validators.required, Validators.min(0)]),
        image: new FormControl(facilityEdit.image, [Validators.required]),
      });
    });
  }

  editFacility(id: string) {
    const facility = this.facilityFormEdit.value;
    this.facilityService.updateFacility(id, facility);
    alert('Cập nhật thành công');
    this.router.navigateByUrl('facility/list');
  }
}
