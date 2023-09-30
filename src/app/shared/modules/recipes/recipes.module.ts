import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RecipeDetailScreenComponent} from "../../../views/recipe-detail-screen/recipe-detail-screen.component";
import {RecipesListComponent} from "../../../views/recipes-list/recipes-list.component";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    RecipesListComponent,
    RecipeDetailScreenComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class RecipesModule { }
