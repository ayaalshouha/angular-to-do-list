import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponant } from './header/header.componant';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponant, UserComponent, TasksComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserID?: string;

  get selectedUser() {
    return this.users.find((e) => e.id === this.selectedUserID);
  }
  onUserIDEmitted(id: string) {
    this.selectedUserID = id;
  }
}
