import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToDoModule } from './todos/todo.module';

@NgModule({
  imports: [
    BrowserModule,
    ToDoModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
