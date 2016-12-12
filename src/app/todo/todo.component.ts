import { Component, Input } from '@angular/core';
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
}
