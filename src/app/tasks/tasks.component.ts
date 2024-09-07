import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userID!: string;
  isAddingTask = false;

  constructor(private tasksService: TaskService) {}

  getSelectedUserTasks() {
    return this.tasksService.getUserTasks(this.userID);
  }

  onStartATask() {
    this.isAddingTask = true;
  }
  onCancelNewTask() {
    this.isAddingTask = false;
  }
}
