import { Comment } from './comment.ts';

export class Todo {
  comments: Comment[];
  constructor(public title: string, public content: string, comments?: Comment[]){
    this.comments = comments;
  };
}
