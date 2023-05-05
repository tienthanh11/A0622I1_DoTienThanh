import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IntroComponent} from "./templates/intro/intro.component";


const routes: Routes = [
  {path: '', component: IntroComponent},
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(module => module.EmployeeModule)
  },
  {
    path: 'facility',
    loadChildren: () => import('./facilities/facilities.module').then(module => module.FacilitiesModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
