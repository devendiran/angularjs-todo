import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashBoardComponent {
  public todos: any[] = [{
  	name: 'Angular 2 Component Design',
  	description: 'Design and analysis required for making todo app',
  	createOn: new Date(),

  },{
  	name: 'Profecta action popup ui design',
  	description: 'Functional analysis and code refactoring',
  	createOn: new Date(),
  	
  },{
  	name: 'Take Passport ',
  	description: 'Twitter is an online news and social networking service where users post and read short 140-character messages called "tweets". Registered users can post and read tweets, but those who are unregistered can only read them',
  	createOn: new Date(),
  }];
  constructor(){
  };
}
