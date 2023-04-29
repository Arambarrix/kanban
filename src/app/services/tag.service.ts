import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService extends AbstractService<Tag>{

  constructor(http:HttpClient) { 
    super(http);
    this.setUrl("tags");
    this.setPath();
    console.log(this.getPath());
  }
}
