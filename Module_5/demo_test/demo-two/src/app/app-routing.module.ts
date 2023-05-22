import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SavingBookListComponent} from "./savingBook/saving-book-list/saving-book-list.component";
import {SavingBookCreateComponent} from "./savingBook/saving-book-create/saving-book-create.component";
import {SavingBookEditComponent} from "./savingBook/saving-book-edit/saving-book-edit.component";

const routes: Routes = [
  {path: '', component: SavingBookListComponent},
  {path: 'savingBook/create', component: SavingBookCreateComponent},
  {path: 'savingBook/edit/:id', component: SavingBookEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
