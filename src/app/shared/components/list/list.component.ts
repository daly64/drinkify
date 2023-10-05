import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatListModule} from "@angular/material/list";
import {RecipeCardComponent} from "../recipe-card/recipe-card.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {recipe} from "../recipe-card/recipe";
import {MatCardModule} from "@angular/material/card";


@Component({
  selector: 'list',
  standalone: true,
  imports: [CommonModule, MatListModule, RecipeCardComponent, MatGridListModule, MatCardModule],
  template: `
    <mat-list>
      <mat-selection-list  *ngFor="let number of numbers">
        <recipe_card/>
      </mat-selection-list>
    </mat-list>





  `,
  styles: [`
    mat-list{margin-top: 2dvh}
    mat-selection-list {
      width: 85dvw;
      margin: auto;
    }

    mat-selection-list:nth-child(n) {
      padding: 0;
    }

  `]
})
export class ListComponent {
numbers=[0,1,2,3,4,5,6,7,8,9,10]
  protected readonly recipe = recipe;
}
