import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {recipe} from "./recipe";
import {MatCardModule} from "@angular/material/card";
@Component({
  selector: 'recipe_card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="main"></div>
  <mat-card>
    <img [src]="recipe.image" mat-card-image alt="">
    <div>
      <mat-card-title>{{recipe.name}}</mat-card-title>
      <mat-card-subtitle>{{recipe.description}}</mat-card-subtitle>
    </div>
  </mat-card>


  `,
  styles: [`
    .main {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin: 10px auto auto;
      z-index: 1;
      width: 25rem;
      height: 25rem;
      border-radius: 20px;


    }
    .main:active {
      background-color: #ff000055;

    }
    mat-card {
      z-index: 0;
      width: 25rem;
      height: 25rem;
      margin: 10px auto auto;
      border-radius: 20px;

      img {
        border-radius: 20px;
      }

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
