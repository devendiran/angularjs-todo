import { Injectable } from '@angular/core';
import { Todo } from './todo';
import * as _ from 'lodash';

@Injectable()
export class TodoService {
  private todos = [
    new Todo('Angular 3 Component Design','Design and analysis required for making todo app', new Date(), 0),
    new Todo('Profecta action popup ui design','Functional analysis and code refactoring  ', new Date(), 1),
    new Todo('Take Passport','Twitter is an online news and social networking service where users post and read short 140-character messages called "tweets". Registered users can post and read tweets, but those who are unregistered can only read them', new Date(), 2)
  ];
  private todoFormDate: { todo: Todo, isEdit: boolean, index?: number};

  public getTodos = function () {
    return this.todos;
  };

  public pushTodo = function(todo: Todo) {
    todo.id = this.todos.length + 1;
    this.todos.push(todo);
  }

  public getTodoFormData (): { todo: Todo, isEdit: boolean, index?: number} {
    return this.todoFormDate;
  }

  public setTodoFormData (data: { todo: Todo, isEdit: boolean, index?: number}): void {
    this.todoFormDate = data;
  }

  public updateTodo(todo: Todo) {
    let index = _.findIndex(this.todos, {
      id:todo.id
    });
    console.log(todo,'............todo', index);
    if (index > -1) {
      this.todos.splice(index, 1, todo);
    }
  }
}
