import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-header.component';
import { AuthModule } from './auth/auth.module';
import { DashBoardModule } from './dashboard/dashboard.module';


const ROUTES: Routes = [{
      path:'**', redirectTo:'/auth/login',
    }];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    DashBoardModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
