import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ColorPickerComponent} from './color-picker/color-picker.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RatingBarComponent} from './rating-bar/rating-bar.component';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    CalculatorComponent,
    RatingBarComponent,
    CountdownTimerComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
