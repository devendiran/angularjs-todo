import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { DashBoardRouter } from './dashboard.router';
import { DashBoardComponent } from "./dashboard.component";
import { TodoModule } from '../todo/todo.module';

@NgModule({
  imports: [
    BrowserModule,
    DashBoardRouter,
    TodoModule
  ],
  declarations: [
    DashBoardComponent
  ]
})
export class DashBoardModule {

}
