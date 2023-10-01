import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RecipeDetailScreenComponent} from "../../../views/recipe-detail-screen/recipe-detail-screen.component";
import {RecipesListComponent} from "../../../views/recipes-list/recipes-list.component";
import {MatButtonModule} from "@angular/material/button";
import {ToolbarComponent} from "../../components/toolbar/toolbar.component";
import {ListComponent} from "../../components/list/list.component";



@NgModule({
  declarations: [
    RecipesListComponent,
    RecipeDetailScreenComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ToolbarComponent,
    ListComponent
  ]
})
export class RecipesModule { }
