import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  celsiusValue!: number;
  fahrenheitValue!: number;
  kelvinValue!: number;
  
  
  calcConversion(){
    this.fahrenheitValue = this.celsiusValue * (9 / 5) + 32;
    this.kelvinValue = this.celsiusValue + 273.15;
    this.celsiusValue = (this.fahrenheitValue - 32) * (5 / 9);
    
  }
}
