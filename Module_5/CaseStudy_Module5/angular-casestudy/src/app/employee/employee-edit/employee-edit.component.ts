import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IPosition} from "../../model/iposition";
import {IEducationDegree} from "../../model/ieducation-degree";
import {IDivision} from "../../model/idivision";
import {EmployeeService} from "../../service/employee.service";
import {PositionService} from "../../service/position.service";
import {EducationDegreeService} from "../../service/education-degree.service";
import {DivisionService} from "../../service/division.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employeeFormEdit: FormGroup;
  id: string;
  positions: IPosition[] = [];
  educationDegrees: IEducationDegree[] = [];
  divisions: IDivision[] = [];

  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private educationDegreeService: EducationDegreeService,
              private divisionService: DivisionService,
              private activatedRoute: ActivatedRoute,
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


    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.employeeService.findByIdEmployee(this.id).subscribe((employeeEdit) => {
        this.employeeFormEdit = new FormGroup({
          id: new FormControl(employeeEdit.id, [Validators.required, Validators.pattern('^NV-\\d{4}$')]),
          name: new FormControl(employeeEdit.name, [Validators.required, Validators.pattern('^\\D*$')]),
          birthday: new FormControl(employeeEdit.birthday, [Validators.required]),
          idCard: new FormControl(employeeEdit.idCard, [Validators.required, Validators.pattern('(^\\d{9}$)|(^\\d{12}$)')]),
          salary: new FormControl(employeeEdit.salary, [Validators.required, Validators.min(0)]),
          phone: new FormControl(employeeEdit.phone, [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$')]),
          email: new FormControl(employeeEdit.email, [Validators.required, Validators.email]),
          address: new FormControl(employeeEdit.address, [Validators.required]),
          position: new FormControl(employeeEdit.position.id, [Validators.required]),
          educationDegree: new FormControl(employeeEdit.educationDegree.id, [Validators.required]),
          division: new FormControl(employeeEdit.division.id, [Validators.required]),
        });
      });
    });
  }

  editEmployee(id: string) {
    /*    const employee = this.employeeFormEdit.value;
        employee.position = this.positionService.findByIdPosition(employee.position);
        employee.educationDegree = this.educationDegreeService.findByIdEducationDegree(employee.educationDegree);
        employee.division = this.divisionService.findByIdDivision(employee.division);*/
    this.positionService.findByIdPosition(this.employeeFormEdit.get('position').value).subscribe(
      (data) => {
        this.employeeFormEdit.patchValue({
          position: data
        });
      },
      () => {
      },
      () => {
        this.educationDegreeService.findByIdEducationDegree(this.employeeFormEdit.get('educationDegree').value).subscribe(
          (data) => {
            this.employeeFormEdit.patchValue({
              educationDegree: data
            });
          },
          () => {
          },
          () => {
            this.divisionService.findByIdDivision(this.employeeFormEdit.get('division').value).subscribe(
              (data) => {
                this.employeeFormEdit.patchValue({
                  division: data
                });
              },
              () => {
              },
              () => {
                this.employeeService.updateEmployee(id, this.employeeFormEdit.value).subscribe(
                  () => {
                  },
                  () => {
                  },
                  () => {
                    this.toast.success("Sửa nhân viên thành công");
                    this.router.navigateByUrl('employee/list');
                  }
                );
              }
            );
          }
        );
      }
    );
  }
}
