import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IntroComponent} from "./templates/intro/intro.component";
import {FacilitiesListComponent} from "./facilities/facilities-list/facilities-list.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {EmployeeListComponent} from "./employee/employee-list/employee-list.component";
import {ContractListComponent} from "./contract/contract-list/contract-list.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";
import {EmployeeCreateComponent} from "./employee/employee-create/employee-create.component";
import {EmployeeEditComponent} from "./employee/employee-edit/employee-edit.component";
import {FacilitiesCreateComponent} from "./facilities/facilities-create/facilities-create.component";
import {FacilitiesEditComponent} from "./facilities/facilities-edit/facilities-edit.component";
import {ContractCreateComponent} from "./contract/contract-create/contract-create.component";


const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'facility/list', component: FacilitiesListComponent},
  {path: 'facility/create', component: FacilitiesCreateComponent},
  {path: 'facility/edit/:id', component: FacilitiesEditComponent},
  {path: 'customer/list', component: CustomerListComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/edit/:id', component: CustomerEditComponent},
  {path: 'employee/list', component: EmployeeListComponent},
  {path: 'employee/create', component: EmployeeCreateComponent},
  {path: 'employee/edit/:id', component: EmployeeEditComponent},
  {path: 'contract/list', component: ContractListComponent},
  {path: 'contract/create', component: ContractCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
