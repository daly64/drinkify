import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {recipe} from "./recipe";
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'recipe_card',
  standalone: true,
  imports: [CommonModule, MatListModule],
  template: `

      <mat-list-item>
          <div matListItemTitle>{{recipe.name}}</div>
          <div matListItemLine>{{recipe.ingredients.length}} ingredients</div>
      </mat-list-item>
        <mat-divider/>

  `,
  styles: [``]
})
export class RecipeCardComponent {
  protected readonly recipe = recipe;
}
