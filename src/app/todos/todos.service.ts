import { Injectable } from '@angular/core';
import { Todo } from './todo.ts';

let todoList = [new Todo('Kangaroo Valley Safari','hey aaaaaaaaaaaaaaaaa sdsdfssdf'), new Todo('Kangaroo Valley Safari2','hey 2 sdfsdfsd sdfsd dsf dsf'), new Todo('Kangaroo Valley Safari3','hey sdffffff xcvvvvvv3')];

@Injectable()
export class ToDoService {
  private todos: Todo[];

  constructor() {
    this.todos = todoList;
  }

  getTodos() {
    return this.todos;
  }
}
