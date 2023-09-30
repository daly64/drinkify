import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'recipe-detail-screen',
  template: `
    <p>
      recipe-detail-screen works!
    </p>
    <button mat-raised-button color="primary" (click)="navigate()"> navigate</button>
  `,
  styles: []
})
export class RecipeDetailScreenComponent {
  constructor(private router: Router) {
  }

  navigate() {
    this.router.navigate([''])
  }
}
