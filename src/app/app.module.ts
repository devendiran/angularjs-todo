import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToDoModule } from './todos/todo.module';
import { HeaderComponent } from './app-header.component';

const ROUTES: Routes = [{
      path:'', component: HeaderComponent
    }];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
