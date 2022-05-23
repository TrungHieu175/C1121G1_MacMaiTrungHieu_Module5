import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {NgxPaginationModule} from "ngx-pagination";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AppRoutingModule} from "./app-routing.module";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {HeaderComponent} from "./header/header.component";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {FooterComponent} from "./footer/footer.component";
import {MatRadioModule} from "@angular/material/radio";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatNativeDateModule} from "@angular/material/core";
import {HttpClientModule} from "@angular/common/http";
import {BaiDangCreateComponent} from "./home/dialog-create/dialog-create.component";
import {BaiDangDeleteComponent} from "./home/dialog-delete/dialog-delete.component";
import {BaiDangComponent} from "./home/home.component";
import {BaiDangUpdateComponent} from "./home/dialog-update/dialog-update.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BaiDangComponent,
    BaiDangCreateComponent,
    BaiDangUpdateComponent,
    BaiDangDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
