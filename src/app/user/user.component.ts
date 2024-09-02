import { Component, computed, Input, input, Output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { EventEmitter } from 'stream';

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
  //decorators are most common
  @Input({required:true}) id!: string;
  @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;
  @Output() select = new EventEmitter();

  //accept InputFunctions with Signals
  // avatar = input.required<string>(); //this property should be an input to this componant
  // name = input.required<string>(); //<> using generic to decide what datatype should be assigned
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);

    //this set method will NOT work because input are readonly signals and can't be modified in UserComponant
    //this.avatar.set();
  }

  //add users dynamically
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  //add method to call on event listener
  //onSelectUser() {
  // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  //}
}
