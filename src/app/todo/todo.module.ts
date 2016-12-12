import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import { CreateTodoComponent } from './create-todo.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule
  ],
  declarations: [
    TodoComponent,
    CreateTodoComponent
  ],
  exports:[
    TodoComponent,
    CreateTodoComponent
  ],
  providers:[TodoService]
})
export class TodoModule {

}
