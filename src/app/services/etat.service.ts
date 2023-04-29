import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { Etat } from '../models/etat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtatService extends AbstractService<Etat>{

  constructor(http:HttpClient) { 
    super(http);
    this.setUrl("etats");
    this.setPath();
    console.log(this.getPath());
  }
}
