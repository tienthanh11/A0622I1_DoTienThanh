import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroComponent} from "./templates/intro/intro.component";
import {FacilitiesListComponent} from "./facilities/facilities-list/facilities-list.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";


const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'facility/list', component: FacilitiesListComponent},
  {path: 'customer/list', component: CustomerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
