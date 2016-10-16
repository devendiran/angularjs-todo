import { Component } from '@angular/core';
import { ToDoComponent } from './todo.component.ts';
import { Todo } from './todo.ts';
import { ToDoService } from './todos.service.ts';

@Component({
  selector: 'todo-list-container',
  templateUrl: './todos-list.component.html' 
})
export class ToDoListContainerComponent {
  todos: Todo[];
  constructor(private todoSrv: ToDoService){
    this.todos = todoSrv.getTodos();
  };
}
