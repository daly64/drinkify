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

      <mat-grid-list cols="1" gutterSize=10 rowHeight=25rem>
          <mat-grid-tile><recipe_card/></mat-grid-tile>
          <mat-grid-tile><recipe_card/></mat-grid-tile>
          <mat-grid-tile><recipe_card/></mat-grid-tile>
          <mat-grid-tile><recipe_card/></mat-grid-tile>

      </mat-grid-list>




  `,
  styles: [`
    mat-grid-list{
      margin-top: 10px;
      mat-grid-tile{
        //background-color: aqua;
      }
    }

  `]
})
export class ListComponent {

  protected readonly recipe = recipe;
}
