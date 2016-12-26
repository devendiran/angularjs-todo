import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo/todo';
import { TodoService } from '../todo/todo.service';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent implements OnInit {
  public todos: Todo[];
  public showCreateTodo: boolean;

  constructor(private todoSrv: TodoService){
    this.showCreateTodo = false;
  };

  toggleTodo(event: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.showCreateTodo = !this.showCreateTodo;
  }

  populateTodo({event, todo}:{ event?: any, todo?: any}) {
    if (event) {
      const isEdit = (todo ? true : false);
      todo = todo ? _.clone(todo) : new Todo('','', new Date());

      this.todoSrv.setTodoFormData({ todo, isEdit});
      this.toggleTodo(event);
    }
  }

  ngOnInit() {
    this.todoSrv.getTodos().subscribe(todo => this.todos = todo, (error: any) => {
      console.log('........signin');
    });
  }
}
