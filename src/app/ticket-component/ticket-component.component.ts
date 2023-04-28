import { Component } from '@angular/core';
import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-component',
  templateUrl: './ticket-component.component.html',
  styleUrls: ['./ticket-component.component.scss']
})
export class TicketComponentComponent {

  tickets: Ticket[];
  currentTicket=null;
  route:ActivatedRoute;

  constructor(private ticketService: TicketService,route:ActivatedRoute) {
    this.tickets = [];
    this.route=route;
  }

  ngOnInit() {
    this.ticketService.findAll().subscribe(data => {
      this.tickets = data;
    });
    
  }
  onUpdate() {
    //this.ticketService.deleteOne;
    console.log(this.route.snapshot.paramMap.get('id'));
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
