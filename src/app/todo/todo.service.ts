import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {
  private todos = [
    new Todo('Angular 3 Component Design','Design and analysis required for making todo app', new Date()),
    new Todo('Profecta action popup ui design','Functional analysis and code refactoring  ', new Date()),
    new Todo('Take Passport','Twitter is an online news and social networking service where users post and read short 140-character messages called "tweets". Registered users can post and read tweets, but those who are unregistered can only read them', new Date())
  ];

  public getTodos = function () {
    return this.todos;
  };

}
