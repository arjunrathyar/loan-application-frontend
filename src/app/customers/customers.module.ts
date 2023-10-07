import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-feedback-edit-admin/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { CustomerListAdminComponent } from './customer-request-to-admin/customer-list-admin.component';
import { CustomerListLoanofficerComponent } from './customer-list-loanofficer/customer-list-loanofficer.component';
import { CustomerListAdminLoApprovedComponent } from './customer-feedback-to-admin/customer-list-admin-lo-approved.component';
import { CustomerAssignloAdminComponent } from './customer-request-edit-admin/customer-assignlo-admin.component';
import { CustomerFeedbackLoanofficerComponent } from './customer-feedback-loanofficer/customer-feedback-loanofficer.component';


@NgModule({
  declarations: [CustomersComponent, CustomerAddComponent, CustomerEditComponent, CustomerListComponent, CustomerListAdminComponent, CustomerListLoanofficerComponent, CustomerListAdminLoApprovedComponent, CustomerAssignloAdminComponent, CustomerFeedbackLoanofficerComponent],
  imports: [
    FormsModule,
    CommonModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
