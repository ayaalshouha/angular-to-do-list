import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponant } from './header/header.componant';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponant],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Developers!';
}
