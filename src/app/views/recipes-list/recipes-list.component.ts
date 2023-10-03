import {Component} from '@angular/core';
import {NavigationService} from "../../shared/services/navigation.service";

@Component({
  selector: 'recipes-list',
  template: `
      <toolbar/>
      <list/>
      <!--      <p>          recipes-list works!      </p>-->
  `,
  styles: [
  ]
})
export class RecipesListComponent {
  constructor(public goto: NavigationService) {
  }


}
