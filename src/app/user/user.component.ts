import { Component, Input, input } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //all members declared in the class will be available in template file

  // //! tells typescript that we know that tis will be set to some value even if ys cant see it here, will be assigned outside the scope
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;

  //accept Input with Signals
  avatar = input<string>(); //this property should be an input to this componant
  name = input<string>(); //<> generic to decide what datatype should be assigned

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {}

  //add users dynamically
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  //add method to call on event listener
  //onSelectUser() {
  // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  //}
}
