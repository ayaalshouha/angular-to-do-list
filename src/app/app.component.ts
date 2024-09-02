import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponant } from './header/header.componant';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponant, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log(`selected user with ${id}`);
  }
}
