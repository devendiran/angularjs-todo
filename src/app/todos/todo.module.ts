import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ToDoComponent } from './todo.component.ts';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ToDoComponent
  ],
  exports:[
    ToDoComponent
  ]
})
export class ToDoModule {

}
