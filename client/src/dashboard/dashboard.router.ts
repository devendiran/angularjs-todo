import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from "./dashboard.component";
import { AuthGuard } from "../auth/auth-guard.service";

const dashboardRoutes: Routes = [
  {
    path: 'home',
    component: DashBoardComponent,
    canActivate:[AuthGuard]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class DashBoardRouter {

}
