import {
  Component,
  //computed,
  Input,
  EventEmitter,
  //input,
  Output,
  //output
} from '@angular/core';
//import { DUMMY_USERS } from './dummy-users';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //all members declared in the class will be available in template file

  // //! tells typescript that value will be assigned outside the scope
  //decorators are most common
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  //input an object type
  @Input({required:true}) user!:{
    id:string,
    avatar:string,
    name:string
  };

  @Output() select = new EventEmitter();

  //accept InputFunctions with Signal
  // id = input.required<string>();
  // avatar = input.required<string>(); //this property should be an input to this componant
  // name = input.required<string>(); //<> using generic to decide what datatype should be assigned
  // select = output<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
    //set method NOT work because input are readonly signals and can't be modified in UserComponant
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
