import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IPosition} from "../../model/iposition";
import {IEducationDegree} from "../../model/ieducation-degree";
import {IDivision} from "../../model/idivision";
import {EmployeeService} from "../../service/employee.service";
import {PositionService} from "../../service/position.service";
import {EducationDegreeService} from "../../service/education-degree.service";
import {DivisionService} from "../../service/division.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employeeFormCreate: FormGroup;
  positions: IPosition[] = [];
  educationDegrees: IEducationDegree[] = [];
  divisions: IDivision[] = [];

  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private educationDegreeService: EducationDegreeService,
              private divisionService: DivisionService,
              private router: Router,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.positionService.getAllPosition().subscribe((data) => {
      this.positions = data;
    });

    this.educationDegreeService.getAllEducationDegree().subscribe((data) => {
      this.educationDegrees = data;
    });

    this.divisionService.getAllDivision().subscribe((data) => {
      this.divisions = data;
    });

    this.employeeFormCreate = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^NV-\\d{4}$')]),
      name: new FormControl('', [Validators.required, Validators.pattern('^\\D*$')]),
      birthday: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('(^\\d{9}$)|(^\\d{12}$)')]),
      salary: new FormControl('', [Validators.required, Validators.min(0)]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      educationDegree: new FormControl('', [Validators.required]),
      division: new FormControl('', [Validators.required]),
    });
  }

  createEmployee() {
    this.employeeService.createEmployee(this.employeeFormCreate.value).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.toast.success("Thêm mới nhân viên thành công");
        this.router.navigateByUrl('employee/list');
      }
    );
  }
}
