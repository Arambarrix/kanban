import { Ticket } from "./ticket";
import { User } from "./user";

export class Comment {
    id:string
    texte:string;
    user:User;
    ticket:Ticket;
    date:Date;
    constructor(id:string,texte:string,ticket:Ticket,user:User,date:Date){
        this.id=id;
        this.texte=texte;
        this.date=date;
        this.user=user;
        this.ticket=ticket;
    }
}
