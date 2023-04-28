import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { Ticket } from '../models/ticket';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService extends AbstractService<Ticket>{

  constructor(http:HttpClient) { 
    super(http);
    this.setUrl("tickets");
    this.setPath();
    console.log(this.getPath());
  }
}
