import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToastrModule} from "ngx-toastr";
import {NavigationComponent} from "./navigation/navigation.component";
import { SavingBookListComponent } from './savingBook/saving-book-list/saving-book-list.component';
import {HttpClientModule} from "@angular/common/http";
import { SavingBookCreateComponent } from './savingBook/saving-book-create/saving-book-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SavingBookEditComponent } from './savingBook/saving-book-edit/saving-book-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SavingBookListComponent,
    SavingBookCreateComponent,
    SavingBookEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
