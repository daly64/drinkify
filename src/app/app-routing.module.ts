import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SplashScreenComponent} from "./views/splash-screen/splash-screen.component";

import {RecipeDetailScreenComponent} from "./views/recipe-detail-screen/recipe-detail-screen.component";
import {RecipesListComponent} from "./views/recipes-list/recipes-list.component";

const routes: Routes = [
  {path: "", component: SplashScreenComponent},
  {path: "recipes_list", component: RecipesListComponent},
  {path: "recipe_detail", component: RecipeDetailScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
