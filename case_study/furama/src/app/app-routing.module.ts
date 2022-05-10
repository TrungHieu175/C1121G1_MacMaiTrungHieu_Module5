import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CreateComponent} from "./service/create/create.component";
import {UpdateComponent} from "./service/update/update.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {UpdateCustomerComponent} from "./customer/update-customer/update-customer.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {CreateContractComponent} from "./contract/create-contract/create-contract.component";
import {ListContractComponent} from "./contract/list-contract/list-contract.component";
import {ListServiceComponent} from "./service/list-service/list-service.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create-service', component: CreateComponent},
  {path: 'update-service', component: UpdateComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: 'update-customer', component: UpdateCustomerComponent},
  {path: 'list-customer', component: ListCustomerComponent},
  {path: 'create-contract', component: CreateContractComponent},
  {path: 'list-contract', component: ListContractComponent},
  {path: 'list-service', component: ListServiceComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
