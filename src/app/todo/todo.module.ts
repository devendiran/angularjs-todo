import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    TodoComponent
  ],
  exports:[TodoComponent],
  providers:[TodoService]
})
export class TodoModule {

}
