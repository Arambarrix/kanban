import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddTicketComponentComponent } from './add-ticket-component/add-ticket-component.component';
import { UpdateTicketComponentComponent } from './update-ticket-component/update-ticket-component.component';
import { User } from '../models/user';
import { Etat } from '../models/etat';
import { UserService } from '../services/user.service';
import { EtatService } from '../services/etat.service';

@Component({
  selector: 'app-ticket-component',
  templateUrl: './ticket-component.component.html',
  styleUrls: ['./ticket-component.component.scss']
})
export class TicketComponentComponent implements OnInit{

  tickets: Ticket[];
  users:User[];
  etats:Etat[];
  currentTicket=new Ticket();
  displayedColumns=['id','texte','auteur','occupant','etat','dateCreation','actions']

  constructor(private ticketService: TicketService,private userService:UserService,private etatService:EtatService,private dialog:MatDialog) {
    this.tickets = [];
    this.etats=[];
    this.users=[];
  }

  ngOnInit() {
    this.ticketService.findAll().subscribe(data => {
      this.tickets = data;
    });
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    this.etatService.findAll().subscribe(data => {
      this.etats = data;
    });
    
  }
  addTicket(){
    this.dialog.open(AddTicketComponentComponent,{
      data:{
        users:this.users,
        etats:this.etats
      }
    });
  }
  onUpdate(id:string){
    this.ticketService.findOne<Ticket>(id).subscribe(data => {
      this.currentTicket = data;
      this.dialog.open(UpdateTicketComponentComponent,{
        data:{
          ticket:data
        }
      })
    },
    error => {
      console.log(error);
    });
   
    
  }
  onDelete(id:string) {
    this.ticketService.deleteOne(id).subscribe(
      response => {
        console.log(response);
      },
      error => {
          console.log(error);
      });
    }
}
