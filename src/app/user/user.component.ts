import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  //all members declared in the class will be available in template file

  //add users dynamically
  selectedUser = DUMMY_USERS[randomIndex];

  //method inside the class
  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar;

  }
  //add method to call on event listener
  onSelectUser(){
    console.log('clicked');
  }
}
