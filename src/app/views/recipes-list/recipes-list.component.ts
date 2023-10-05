import {Component} from '@angular/core';
import {NavigationService} from "../../shared/services/navigation.service";

@Component({
  selector: 'recipes-list',
  template: `
      <toolbar/>
      <search_bar/>
      <list/>

  `,
  styles: [``]
})
export class RecipesListComponent {
  constructor(public goto: NavigationService) {
  }


}
