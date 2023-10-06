import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SharedComponent } from './shared/shared.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [

  //Empty Routiing
  {
    path:'',redirectTo:'auth/login', pathMatch: 'full'
  },

  //lazy loading

  {
    path: "customers",
    component: CustomersComponent,
    loadChildren: () => import('.//customers/customers.module').then(x => x.CustomersModule)
  },

  {
    path: "shared",
    component: SharedComponent,
    loadChildren: () => import('./shared/shared.module').then(x => x.SharedModule)
  },

  {
    path: "auth",
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
  },

  //Wild card routes
  {
    path: "**",
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
