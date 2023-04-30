import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from 'src/app/models/ticket';
import { User } from 'src/app/models/user';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-update-ticket-component',
  templateUrl: './update-ticket-component.component.html',
  styleUrls: ['./update-ticket-component.component.scss']
})
export class UpdateTicketComponentComponent implements OnInit {

  ticket=new Ticket();
  choix_auteur=new User();
  submitted=false;
  constructor(private ticketService: TicketService,@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  save() {
      this.ticketService.updateOne(this.data.ticket.id,this.ticket).subscribe(data => {
        console.log(data)        
        this.ticket = new Ticket();
      }, 
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}
