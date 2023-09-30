import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'splash-screen',
  template: `
      <div (click)="navigate()" class="splash">
          <svg height="24" viewBox="0 0 26 24" width="26" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.812.678c-.054-.034-.107-.06-.16-.087a4.492 4.492 0 0 0-2.105-.516h-.008a4.602 4.602 0 0 0-3.965 2.278l-.012.022a4.429 4.429 0 0 0-.582 1.847l-.001.017h-9.6L6.305 1.65A2.664 2.664 0 0 0 3.229.071l.018-.004L.001.805l.201.886L3.448.953a1.76 1.76 0 0 1 2.014 1.035L5.466 2l.932 2.24H.302l10.193 10.193v7.463c-2.367.168-4 .952-4 1.925v.181h9.824v-.181c0-.972-1.636-1.76-4-1.925v-7.463l6.283-6.283c.197.167.417.322.649.458l.022.012A4.575 4.575 0 0 0 23.841.692L23.819.68zm.999 3.507l-2.494.007l1.241-2.16a3.305 3.305 0 0 1 1.251 2.135zm-2.038-2.609l-1.241 2.166l-1.254-2.153a3.285 3.285 0 0 1 1.264-.248c.443 0 .866.086 1.253.243zm-4.111 1.429c.218-.379.496-.698.825-.955l.007-.005l1.254 2.153l-2.488.007c.056-.449.198-.855.41-1.216l-.008.015zM3.359 5.506H6.92l.49 1.187H4.547zm14.894 1.188h-.813V6.7H8.387l-.49-1.187h11.534zm2.045 1.026l1.241-2.166l1.254 2.153c-.373.158-.807.25-1.262.25c-.444 0-.868-.087-1.255-.246l.022.008zm4.111-1.422a3.297 3.297 0 0 1-.824.955l-.007.005l-1.254-2.153l2.488-.006a3.35 3.35 0 0 1-.411 1.214l.009-.016z"
                    fill="white"/>
          </svg>

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

      svg {
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
constructor(private router:Router) {
}
  navigate() {
    this.router.navigate(['recipes_list'])
  }
}
