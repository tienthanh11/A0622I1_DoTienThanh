import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeRoutingModule} from './employee-routing.module';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeCreateComponent} from "./employee-create/employee-create.component";
import {EmployeeEditComponent} from "./employee-edit/employee-edit.component";
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule {
}
