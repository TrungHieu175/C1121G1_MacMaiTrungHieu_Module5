import {RouterModule, Routes} from "@angular/router";
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";
import {NgModule} from "@angular/core";

const routes: Routes =
  [{path:'detail/:id',component: DictionaryDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
