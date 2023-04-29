import { Ticket } from "./ticket";
import { User } from "./user";

export class Comment {
    id!:string
    texte!:string;
    user!:User;
    ticket!:Ticket;
    dateCommentaire!:Date;
    
}
