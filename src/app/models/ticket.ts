import { Etat } from "./etat";
import { Support } from "./support";
import { User } from "./user";

export class Ticket {
    id!:string;
    texte!:string;
    etat!:Etat;
    dateCreation!:Date;
    auteur!:User;
    membresup:Support|undefined;
    tags!:[];
    
}
