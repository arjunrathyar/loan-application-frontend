import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAddComponent } from "./customer-add/customer-add.component";
import { CustomerEditComponent } from "./customer-edit-admin/customer-edit.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerListAdminComponent } from './customer-list-admin/customer-list-admin.component';

const routes: Routes = [

    
    {path:"add",component:CustomerAddComponent},
    
    {path:"edit/:id",component: CustomerEditComponent},
    
    {path:"list",component: CustomerListComponent},

    //{path:"approvallist",component: CustomerListComponent},

    {path:"assignloanofficer",component: CustomerListAdminComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
