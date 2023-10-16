import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { TaskItem } from '../task-item';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent {
  @Input() task!: TaskItem;

  //czy na pewno jest ok? Nie - trzeba dodać przekazywanie id przy kliknięciu...
  @Input() callback!: (id: number) => void;
  @Output() newDeleteEvent = new EventEmitter<number>();

  deleteTask(id: number) {
    this.newDeleteEvent.emit(id);
  }
}
