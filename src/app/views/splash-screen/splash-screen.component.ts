import {Component} from '@angular/core';

@Component({
  selector: 'splash-screen',
  template: `
    <div class="splash" (click)="navigate()">
      <img src="assets/cocktail.svg" alt="">
      <h1>{{title}}</h1>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Galada&family=Roboto:wght@100&family=Satisfy&display=swap');
    div {
      background-color: #FF9800;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        height: 25%;
        width: 25rem;
      }

      h1 {
        color: white;
        font-size: 3rem;
        font-family: 'Satisfy', cursive;
      }
    }

  `
  ]
})
export class SplashScreenComponent {
  title = 'Drinkify';

  navigate() {
    console.log("pass")
  }
}
