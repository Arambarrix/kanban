import { Injectable } from '@angular/core';
import { Support } from '../models/support';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class SupportService extends AbstractService<Support>{

  constructor(http:HttpClient) { 
    super(http);
    this.setUrl("membresups");
    this.setPath();
    console.log(this.getPath());
  }
}
