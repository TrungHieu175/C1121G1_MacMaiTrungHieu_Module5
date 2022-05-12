import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateComponent } from './service/create/create.component';
import { UpdateComponent } from './service/update/update.component';

import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CreateComponent,
    UpdateComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    ListCustomerComponent,
    CreateContractComponent,
    ListContractComponent,
    ListServiceComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
