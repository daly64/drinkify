import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatListModule} from "@angular/material/list";
import {RecipeCardComponent} from "../recipe-card/recipe-card.component";


@Component({
  selector: 'list',
  standalone: true,
  imports: [CommonModule, MatListModule, RecipeCardComponent],
  template: `
      <mat-selection-list role="list">

          <recipe_card role="listitem"/>
          <!--                <mat-list-item role="listitem">Item 1</mat-list-item>
                          <mat-list-item role="listitem">Item 2</mat-list-item>
                          <mat-list-item role="listitem">Item 3</mat-list-item>-->
      </mat-selection-list>





  `,
  styles: [`
  `]
})
export class ListComponent {

}
