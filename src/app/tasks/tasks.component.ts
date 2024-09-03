import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  //? this might not be initialized
  // @Input() name: string | undefined;
  @Input() name?: string;
} 
