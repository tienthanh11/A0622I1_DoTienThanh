import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToastrModule} from "ngx-toastr";
import {NavigationComponent} from './navigation/navigation.component';
import {MuaBanListComponent} from './mua-ban/mua-ban-list/mua-ban-list.component';
import {HttpClientModule} from "@angular/common/http";
import { MuaBanCreateComponent } from './mua-ban/mua-ban-create/mua-ban-create.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MuaBanListComponent,
    MuaBanCreateComponent
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
export class AppModule {
}
