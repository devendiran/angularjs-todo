import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ClickOutSide } from './click-out.directive';
import { HttpModule, JsonpModule } from '@angular/http';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    ClickOutSide
  ],
  exports:[
    ClickOutSide,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ]
})
export class SharedModule {

}
