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
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import {HttpClientModule} from "@angular/common/http";
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';

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
    TodoComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    CategoryCreateComponent,
    CategoryListComponent,
    CategoryDeleteComponent,
    CategoryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
