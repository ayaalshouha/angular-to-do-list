import { Component , Output, EventEmitter} from '@angular/core';
import { isValidDate } from 'rxjs/internal/util/isDate';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  isDialogCanceled = false;
  @Output() cancel =new EventEmitter<boolean>();

  onCancel() {
    this.isDialogCanceled = true;
    this.cancel.emit(this.isDialogCanceled);
  }
}
