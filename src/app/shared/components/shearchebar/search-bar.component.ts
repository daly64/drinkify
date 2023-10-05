import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'search_bar',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatIconModule],
  template: `
    <div>
      <mat-form-field>
        <mat-label>find recipe</mat-label>
        <input matInput type="search">
      </mat-form-field>
    </div>


  `,
  styles: [`
    div {
      width: 100dvw;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;
padding-top: 10px;
    }
    mat-form-field{
      width: 50dvw;

    }
  `  ]
})
export class SearchBarComponent {

}
