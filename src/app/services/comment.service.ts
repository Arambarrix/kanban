import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService extends AbstractService<Comment>{

  constructor(http:HttpClient) { 
    super(http);
    this.setUrl("commentaires");
    this.setPath();
    console.log(this.getPath());
  }
}
