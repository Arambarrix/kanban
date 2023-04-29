import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment';
import { Ticket } from '../models/ticket';
import { User } from '../models/user';
import { TicketService } from '../services/ticket.service';
import { UserService } from '../services/user.service';
import { CommentService } from '../services/comment.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCommentComponentComponent } from './add-comment-component/add-comment-component.component';
import { UpdateCommentComponentComponent } from './update-comment-component/update-comment-component.component';

@Component({
  selector: 'app-comment-component',
  templateUrl: './comment-component.component.html',
  styleUrls: ['./comment-component.component.scss']
})
export class CommentComponentComponent implements OnInit{

  comments: Comment[];
  tickets:Ticket[];
  users:User[];
  currentComment=new Comment();
  displayedColumns=['id','texte','user','ticket','date','actions']

  constructor(private ticketService: TicketService,private userService:UserService,private service:CommentService,private dialog:MatDialog) {
    this.tickets = [];
    this.comments=[];
    this.users=[];
  }

  ngOnInit() {
    this.ticketService.findAll().subscribe(data => {
      this.tickets = data;
    });
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    this.service.findAll().subscribe(data => {
      this.comments = data;
    });
    
  }
  addComment(){
    this.dialog.open(AddCommentComponentComponent,{
      data:{
        users:this.users,
        tickets:this.tickets
      }
    });
  }
  onUpdate(id:string){
    this.service.findOne<Comment>(id).subscribe(data => {
      this.currentComment = data;
      this.dialog.open(UpdateCommentComponentComponent,{
        data:{
          comment:data
        }
      })
    },
    error => {
      console.log(error);
    });
   
    
  }
  onDelete(id:string) {
    this.service.deleteOne(id).subscribe(
      response => {
        console.log(response);
      },
      error => {
          console.log(error);
      });
    }
}