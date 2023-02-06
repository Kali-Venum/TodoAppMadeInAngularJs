import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  @Output() addATodo: EventEmitter<Todo> = new EventEmitter();

  title: string;
  description: string;

  onSubmit() {
    const todo = {
      sno: 10,
      title: this.title,
      description: this.description,
      isActive: true,
    };
    this.addATodo.emit(todo)
  }
}
