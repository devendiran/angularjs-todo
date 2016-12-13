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
  public hideModal: boolean = false;
  public isEditTodo: boolean;

  constructor(private todoSrv: TodoService) {
    let todoFormData = todoSrv.getTodoFormData();
    this.todo = todoFormData.todo;
    this.isEditTodo = todoFormData.isEdit;
  }

  @Output()
  public closeModal = new EventEmitter();


  closePannel(event: any) {
    this.hideModal = !this.hideModal;
    setTimeout(() => {this.closeModal.emit(null);},500);
  }

  createOrUpdateTodo(event: any) {
    this.closePannel(event);
    if (this.isEditTodo) {
      this.todoSrv.updateTodo(this.todo);
    } else {
      this.todoSrv.pushTodo(this.todo);
    }
  }


}
