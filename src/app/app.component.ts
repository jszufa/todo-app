import { Component } from '@angular/core';
import { TaskItem } from './task-item';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';

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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }

  moveTaskDown(id: number) {
    const task: TaskItem | undefined = this.taskList.find(task => task.id === id);
    if (task) {
      const currentIndex = this.taskList.indexOf(task);
      if (currentIndex < this.taskList.length - 1) {
        this.taskList.push(this.taskList.splice(currentIndex, 1)[0]);
      }
    }
  }


}
