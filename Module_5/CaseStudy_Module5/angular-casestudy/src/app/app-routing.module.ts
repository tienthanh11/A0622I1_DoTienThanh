import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IntroComponent} from "./templates/intro/intro.component";
import {FacilitiesListComponent} from "./facilities/facilities-list/facilities-list.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {EmployeeListComponent} from "./employee/employee-list/employee-list.component";
import {ContractListComponent} from "./contract/contract-list/contract-list.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";


const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'facility/list', component: FacilitiesListComponent},
  {path: 'customer/list', component: CustomerListComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'employee/list', component: EmployeeListComponent},
  {path: 'contract/list', component: ContractListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
