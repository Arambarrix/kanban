import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-add-tag-component',
  templateUrl: './add-tag-component.component.html',
  styleUrls: ['./add-tag-component.component.scss']
})
export class AddTagComponentComponent implements OnInit {

  type=1;
  tag=new Tag();
  submitted=false;
  constructor(private tagService: TagService) {

  }

  ngOnInit() {
  }

  save() {
  
      this.tagService.createOne(this.tag).subscribe(data => {
        console.log(data)
        this.tag = new Tag();
      }, 
      error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}

