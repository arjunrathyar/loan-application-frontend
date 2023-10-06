import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedComponent } from './shared.component';


@NgModule({
  declarations: [HomeComponent, NotFoundComponent, SharedComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    HomeComponent
  ]
})
export class SharedModule { }
