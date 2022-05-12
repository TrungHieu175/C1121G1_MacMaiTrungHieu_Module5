import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularShowPetInfoComponent } from './angular-show-pet-info/angular-show-pet-info.component';
import { AngularUsingBootstrapComponent } from './angular-using-bootstrap/angular-using-bootstrap.component';
import { ArticleComponent } from './angular-hackernews-app/article/article.component';
import { LikeComponent } from './angular-hackernews-app/like/like.component';
import { NavbarComponent } from './angular-hackernews-app/navbar/navbar.component';
import { FooterComponent } from './angular-hackernews-app/footer/footer.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    AngularShowPetInfoComponent,
    AngularUsingBootstrapComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    NameCardComponent,
    ProgressBarComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
