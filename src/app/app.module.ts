import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToDoModule } from './todos/todo.module';
import { HeaderComponent } from './app-header.component';

@NgModule({
  imports: [
    BrowserModule,
    ToDoModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
