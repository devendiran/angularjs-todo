import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { DashBoardRouter } from './dashboard.router';
import { DashBoardComponent } from "./dashboard.component";
import { CardComponent } from "./card.component";

@NgModule({
  imports: [
    BrowserModule,
    DashBoardRouter
  ],
  declarations: [
    DashBoardComponent,
    CardComponent
  ]
})
export class DashBoardModule {

}
