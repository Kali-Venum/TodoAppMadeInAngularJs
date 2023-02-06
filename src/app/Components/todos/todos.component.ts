import { Component } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'This is title 1',
        description: 'This is description 1',
        isActive: true,
      },
      {
        sno: 2,
        title: 'This is title 2',
        description: 'This is description 2',
        isActive: true,
      },
      {
        sno: 3,
        title: 'This is title 3',
        description: 'This is description 3',
        isActive: true,
      },
    ];
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  addATodo(todo: Todo){
    console.log(todo, "<<==todo...")
    this.todos.push(todo)
  }
}
