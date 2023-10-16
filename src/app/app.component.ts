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
  taskList: TaskItem[] = localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')!) : [];

  //dodawanie do session storage

  dataSave() {
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }


  addTask(text: string) {
    if (text) {
      this.taskList.unshift(
        {
          id: Date.now(),
          text: text,
          checked: false,
          editing: false
        }
      );
      this.dataSave();
    }
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter(task => task.id !== id);
    this.dataSave();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }

  //użycie funkcji strzałkowej zachowuje mi kontekst this z deklaracji
  moveTask = (id: number) => {

    const task: TaskItem | undefined = this.taskList.find(task => task.id === id);
    if (task) {

      const currentIndex = this.taskList.indexOf(task);
      if (currentIndex === this.taskList.length - 1 && !task.checked) { return };

      // finding breaking point (undone / done) in the list
      let breakingPiont: number = this.taskList.findIndex(task => task.checked === true);
      if (breakingPiont === -1) { breakingPiont = this.taskList.length - 1 };

      let movedTask = this.taskList.splice(currentIndex, 1);

      this.taskList = [...this.taskList.slice(0, breakingPiont),
      ...movedTask,
      ...this.taskList.slice(breakingPiont)
      ];
    }
  }
}

//czemu jestem jedno kliknięcie wstecz jeśli chodzi o stan checked?
