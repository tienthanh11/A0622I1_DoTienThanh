import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MuaBanListComponent} from "./mua-ban/mua-ban-list/mua-ban-list.component";
import {MuaBanCreateComponent} from "./mua-ban/mua-ban-create/mua-ban-create.component";


const routes: Routes = [
  {path: '', component: MuaBanListComponent},
  {path: 'muaBan/create', component: MuaBanCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
