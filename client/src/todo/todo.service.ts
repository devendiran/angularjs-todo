import { Injectable } from '@angular/core';
import { Todo } from './todo';
import * as _ from 'lodash';
import { HttpClient } from '../shared/http-client';
import { Subject, Observable } from 'rxjs';
import { Response } from '@angular/http';

@Injectable()
export class TodoService {
  private todosUrl = '/api/todos';
  private todos: Todo[] = [];
  private todoFormDate: { todo: Todo, isEdit: boolean, index?: number};
  
  constructor(private http: HttpClient) {

  }

  public getTodos = function (): Observable<[Todo]> {
    console.log('get todos for user');
    return this.http.get(this.todosUrl)
      .map((res: Response) => {
        Array.prototype.push.apply(this.todos, res.json());
        return this.todos;
      })
      .catch((error: Response | any) => { 
        console.log(error, 'Error occured while registering users');
        return Observable.throw(error);
      });
  };

  public createTodo = function(todo: Todo) {
    console.log('create todos for user');
    return this.http.post(this.todosUrl, todo)
      .map((res: Response) => this.todos.push(res.json()))
      .catch((error: Response | any) => { 
        console.log(error, 'Error occured while registering users');
        return Observable.throw(error);
      });
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
