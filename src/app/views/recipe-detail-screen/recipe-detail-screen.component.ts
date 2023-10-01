import {Component} from '@angular/core';
import {NavigationService} from "../../shared/services/navigation.service";

@Component({
  selector: 'recipe-detail-screen',
  template: `
    <p>
      recipe-detail-screen works!
    </p>
    <button mat-raised-button color="primary" (click)="goto.toSplashScreen()"> navigate</button>
  `,
  styles: []
})
export class RecipeDetailScreenComponent {
  constructor(public goto: NavigationService) {
  }


}
