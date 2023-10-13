import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { TaskItem } from '../task-item';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent {
  @Input() task!: TaskItem;
  @Output() newDeleteEvent = new EventEmitter<number>();

  isChecked: boolean = false;

  deleteTask(id: number) {
    this.newDeleteEvent.emit(id);
  }
}
