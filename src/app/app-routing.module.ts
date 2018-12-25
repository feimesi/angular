import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableshComponent } from './common/tablesh/tablesh.component';
import { LoginComponent } from './common/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tablesh', component: TableshComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
