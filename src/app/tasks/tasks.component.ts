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

  // one instance for all componant operate on the same data on memory
  constructor(private tasksService: TaskService) {}

  get SelectedUserTasks() {
    return this.tasksService.getUserTasks(this.userID);
  }

  onCompleteTask(id: string) {
    return this.tasksService.CompleteTask(this.userID);
  }

  onStartATask() {
    this.isAddingTask = true;
  }
  onCloseNewTask() {
    this.isAddingTask = false;
  }
}
