import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  public todo : Todo;

  constructor(private todoSrv: TodoService) {
    this.todo = new Todo('','', new Date());
  }

  @Output()
  public closeModal = new EventEmitter();


  closePannel(event: any) {
    this.closeModal.emit(null);
  }

  create() {
    this.todoSrv.pushTodo(this.todo);
    this.closeModal.emit(null);
  }
}
