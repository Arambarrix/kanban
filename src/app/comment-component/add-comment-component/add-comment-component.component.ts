import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-add-comment-component',
  templateUrl: './add-comment-component.component.html',
  styleUrls: ['./add-comment-component.component.scss']
})
export class AddCommentComponentComponent implements OnInit {

  comment=new Comment();
  submitted=false;
  constructor(private service: CommentService,@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  save() {
      this.service.createOne(this.comment).subscribe(data => {
        console.log(data)        
        this.comment = new Comment();
      }, 
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}