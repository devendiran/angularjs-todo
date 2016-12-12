import { Component } from '@angular/core';
import { Todo } from '../todo/todo';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent {
  public todos: Todo;
  public showCreateTodo: boolean;

  constructor(private todoSrv: TodoService){
    this.todos = todoSrv.getTodos();
    this.showCreateTodo = false;
  };

  toggleTodo(event: Event) {
    if (event) {
      event.stopPropagation();
    }
    
    this.showCreateTodo = !this.showCreateTodo;
  }
}
