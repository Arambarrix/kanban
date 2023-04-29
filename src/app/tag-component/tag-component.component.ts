import { Component, OnInit } from '@angular/core';
import { Tag } from '../models/tag';
import { TagService } from '../services/tag.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTagComponentComponent } from './add-tag-component/add-tag-component.component';
import { UpdateTagComponentComponent } from './update-tag-component/update-tag-component.component';

@Component({
  selector: 'app-tag-component',
  templateUrl: './tag-component.component.html',
  styleUrls: ['./tag-component.component.scss']
})
export class TagComponentComponent implements OnInit {

  tags: Tag[];
  tag=new Tag();
  displayedColumns=['id','libelle','actions']

  constructor(private tagService: TagService,private dialog:MatDialog) {
    this.tags = [];
  }

  ngOnInit() {
    this.tagService.findAll().subscribe(data => {
      this.tags = data;
    });
  }
  addTag(){
    this.dialog.open(AddTagComponentComponent)
  }
  onDelete(id:string){
    this.tagService.deleteOne(id).subscribe(
      response => {
        console.log(response);
      },
      error => {
          console.log(error);
      });
    ;
  }
  onUpdate(id:string){
    this.tagService.findOne<Tag>(id).subscribe(data => {
      this.tag = data;
      this.dialog.open(UpdateTagComponentComponent,{
        data:{
          id:data.id,
          libelle:data.libelle
        }
      })
    },
    error => {
      console.log(error);
    });
   
    
  }
}
