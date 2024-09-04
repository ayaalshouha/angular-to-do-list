import { Component, Input } from '@angular/core';
import { RequiredValidator } from '@angular/forms';
import { type Task } from './task.model';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
}
