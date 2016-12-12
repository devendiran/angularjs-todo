import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { DashBoardRouter } from './dashboard.router';
import { DashBoardComponent } from "./dashboard.component";
import { TodoModule } from '../todo/todo.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    DashBoardRouter,
    TodoModule,
    SharedModule
  ],
  declarations: [
    DashBoardComponent
  ]
})
export class DashBoardModule {

}
