import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()

  onDelete(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("On delete clicked.")
  }
}
