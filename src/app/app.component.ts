import { Component } from '@angular/core';
import { TaskItem } from './task-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'todo-app';
  taskList: TaskItem[] = [];

  addTask(text: string) {
    if (text) {
      this.taskList.push(
        {
          id: Date.now(),
          text: text
        }
      )
    }
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter(task => task.id !== id);
  }
}
