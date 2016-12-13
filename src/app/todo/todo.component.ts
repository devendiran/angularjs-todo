import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input()
  public todo: Todo;
  constructor(){
  };
  @Output()
  editTodo = new EventEmitter();

  editTodoItem(event: Event, todo?: Todo, index?: any) {
    this.editTodo.emit({ event, todo, index});
  }
}
