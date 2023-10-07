import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAddComponent } from "./customer-add/customer-add.component";
import { CustomerEditComponent } from "./customer-edit-admin/customer-edit.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerListAdminComponent } from './customer-list-admin/customer-list-admin.component';
import { CustomerListAdminLoApprovedComponent } from './customer-list-admin-lo-approved/customer-list-admin-lo-approved.component';
import { CustomerAssignloAdminComponent } from './customer-assignlo-admin/customer-assignlo-admin.component';

const routes: Routes = [

    
    {path:"add",component:CustomerAddComponent},
    
    {path:"edit/:id",component: CustomerEditComponent},
    
    {path:"list",component: CustomerListComponent},

    {path:"approvallist",component: CustomerListAdminLoApprovedComponent},

    {path:"assignloanofficer",component: CustomerListAdminComponent},

    {path:"editlo/:id",component: CustomerAssignloAdminComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
