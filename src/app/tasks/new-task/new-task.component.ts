import { Component, Output, EventEmitter } from '@angular/core';
import { isValidDate } from 'rxjs/internal/util/isDate';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter();

  onCancel() {
    this.cancel.emit();
  }
}
