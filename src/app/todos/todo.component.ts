import { Component } from '@angular/core';
import { Todo } from './todo.ts';

@Component({
  inputs: ['todo'],
  selector: 'my-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css']
})
export class ToDoComponent {
  public todo: Todo;
}
