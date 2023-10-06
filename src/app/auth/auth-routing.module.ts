import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from "./auth.guard";
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { LoanofficerDashboardComponent } from './loanofficer-dashboard/loanofficer-dashboard.component';

const routes: Routes = [

  {path:"login", component:LoginComponent},
  {path:"admin", component:AdminDashboardComponent,canActivate:[AuthGuard],data:{role: '1'}},   
  {path:"customer", component:CustomerDashboardComponent,canActivate:[AuthGuard],data:{role: '2'}},
  {path:"loanoffcer", component:LoanofficerDashboardComponent,canActivate:[AuthGuard],data:{role: '3'}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
