import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { NavigationComponent } from './templates/navigation/navigation.component';
import { FooterComponent } from './templates/footer/footer.component';
import { IntroComponent } from './templates/intro/intro.component';
import { FacilitiesListComponent } from './facilities/facilities-list/facilities-list.component';
import { FacilitiesCreateComponent } from './facilities/facilities-create/facilities-create.component';
import { FacilitiesEditComponent } from './facilities/facilities-edit/facilities-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    IntroComponent,
    FacilitiesListComponent,
    FacilitiesCreateComponent,
    FacilitiesEditComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    ContractListComponent,
    ContractCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
