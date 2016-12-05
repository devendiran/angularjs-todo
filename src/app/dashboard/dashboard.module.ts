import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { DashBoardRouter } from './dashboard.router';
import { DashBoardComponent } from "./dashboard.component";

@NgModule({
  imports: [
    BrowserModule,
    DashBoardRouter
  ],
  declarations: [
    DashBoardComponent
  ]
})
export class DashBoardModule {

}
