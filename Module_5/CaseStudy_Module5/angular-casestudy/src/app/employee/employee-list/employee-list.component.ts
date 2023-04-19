import { Component, OnInit } from '@angular/core';
import {IEmployee} from "../../model/iemployee";
import {IPosition} from "../../model/iposition";
import {IEducationDegree} from "../../model/ieducation-degree";
import {IDivision} from "../../model/idivision";
import {EmployeeService} from "../../service/employee.service";
import {PositionService} from "../../service/position.service";
import {EducationDegreeService} from "../../service/education-degree.service";
import {DivisionService} from "../../service/division.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: IEmployee[] = [];
  positions: IPosition[] = [];
  educationDegrees: IEducationDegree[] = [];
  divisions: IDivision[] = [];

  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private educationDegreeService: EducationDegreeService,
              private divisionService: DivisionService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.employees = this.employeeService.getAllEmployee();

    this.positions = this.positionService.getAllPosition();

    this.educationDegrees = this.educationDegreeService.getAllEducationDegree();

    this.divisions = this.divisionService.getAllDivision();
  }
}
