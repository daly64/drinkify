import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {
  }

  public toSplashScreen() {
    this.router.navigate([''])
  }

  public toRecipesList() {
    this.router.navigate(['recipes_list'])
  }

  public toDetail() {
    this.router.navigate(['recipe_detail'])
  }
}
