import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {recipe} from "./recipe";
import {MatCardModule} from "@angular/material/card";
@Component({
  selector: 'recipe_card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
      <mat-card>
          <img [src]="recipe.image" alt="" mat-card-image>
          <div>
              <mat-card-title>{{recipe.name}}</mat-card-title>
              <mat-card-subtitle>{{recipe.description}}</mat-card-subtitle>
          </div>
      </mat-card>


  `,
  styles: [`


    mat-card {
      width: 25rem;
      height: 25rem;
      margin: auto;
      border: solid 1px darkgray;


      div {
        position: absolute;
        background-color: #ffffffcc;
        bottom: 0;
        width: 100%;
        height: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      mat-card-title {
        font-size: 1.5rem;
        letter-spacing: .25rem;
      }

      mat-card-subtitle {
        font-size: 1rem;
      }
    }


  `  ]
})
export class RecipeCardComponent {
  protected readonly recipe = recipe;
}
