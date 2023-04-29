import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-update-tag-component',
  templateUrl: './update-tag-component.component.html',
  styleUrls: ['./update-tag-component.component.scss']
})
export class UpdateTagComponentComponent implements OnInit {

  currentTag=new Tag();
  constructor(private service: TagService,@Inject(MAT_DIALOG_DATA) public data: Tag) {

  }

  ngOnInit() {
    console.log(this.data);
    
  }
  type=1;
  submitted=false;

  save() {
      this.service.updateOne(this.data.id,this.currentTag).subscribe(data => {
        console.log(data)
        this.currentTag = new Tag();
      }, 
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}

