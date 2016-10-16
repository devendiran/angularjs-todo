import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ToDoComponent } from './todo.component.ts';
import { ToDoListContainerComponent } from './todos-list.component.ts';
import { ToDoService } from './todos.service.ts';

@NgModule({
  imports: [
    BrowserModule
  ],
  providers: [ ToDoService ], 
  declarations: [
    ToDoComponent,
    ToDoListContainerComponent
  ],
  exports:[
    ToDoComponent,
    ToDoListContainerComponent
  ]
})
export class ToDoModule {

}
