import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { AutofocusDirective } from '../autofocus.directive';
import { TaskItem } from '../task-item';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent {
  @Input() task!: TaskItem;

  @Input() callback!: (id: number) => void;
  @Output() newDeleteEvent = new EventEmitter<number>();

  deleteTask(id: number) {
    this.newDeleteEvent.emit(id);
  }

  editTask(task:TaskItem): void {
    task.editing = true;
  }

  finishEditing(task: TaskItem): void {
    task.editing = false;
  }
}
