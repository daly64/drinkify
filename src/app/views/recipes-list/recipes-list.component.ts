import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'recipes-list',
  template: `
    <p>
      recipes-list works!
    </p>
    <button mat-raised-button color="primary" (click)="navigate()"> navigate</button>
  `,
  styles: [
  ]
})
export class RecipesListComponent {
  constructor(private router: Router) {
  }

  navigate() {
    this.router.navigate(['recipe_detail'])
  }
}
