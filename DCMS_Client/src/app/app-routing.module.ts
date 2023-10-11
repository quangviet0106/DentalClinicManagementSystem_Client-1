import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutsComponent} from "./shared/layouts/admin-layouts/admin-layouts.component";

const routes: Routes = [
  {path: "", component: AdminLayoutsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
