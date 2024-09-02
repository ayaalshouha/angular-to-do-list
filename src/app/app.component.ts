import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponant } from './header/header.componant';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponant, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Developers!';
}
