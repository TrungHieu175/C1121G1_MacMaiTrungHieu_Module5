import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { ImgSlideComponent } from './img-slider/img-slide/img-slide.component';
import {NgImageSliderModule} from "ng-image-slider";



@NgModule({
  declarations: [ImgSliderComponent, ImgSlideComponent],
  exports: [
    ImgSlideComponent
  ],
  imports: [
    CommonModule,
    NgImageSliderModule
  ]
})
export class ImgSliderModule { }
