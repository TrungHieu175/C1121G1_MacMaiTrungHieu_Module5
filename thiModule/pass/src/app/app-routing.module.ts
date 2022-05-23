import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'create-services', component: CreateComponent},
  // {path: 'update-services', component: UpdateComponent},
  // {path: 'create-customer', component: CreateCustomerComponent},
  // {path: 'update-customer', component: UpdateCustomerComponent},
  // {path: 'list-customer', component: ListCustomerComponent},
  // {path: 'create-contract', component: CreateContractComponent},
  // {path: 'list-contract', component: ListContractComponent},
  // {path: 'list-services', component: ListServiceComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
