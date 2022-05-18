import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ColorPickerComponent} from './color-picker/color-picker.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RatingBarComponent} from './rating-bar/rating-bar.component';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {RouterModule} from "@angular/router";
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {AppRoutingModule} from "./app-routing.module";
import {NgImageSliderModule} from "ng-image-slider";
import {ImgSliderModule} from "./img-slider/img-slider.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    CalculatorComponent,
    RatingBarComponent,
    CountdownTimerComponent,
    RegisterComponent,
    LoginComponent,
    DictionaryComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    NgImageSliderModule,
    ImgSliderModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
