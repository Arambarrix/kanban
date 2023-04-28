import { Etat } from "./etat";
import { Support } from "./support";
import { User } from "./user";

export class Ticket {
    id:string;
    texte:string;
    etat:Etat;
    dateCreation:Date;
    auteur:User|undefined;
    membresup:Support|undefined;
    tags:[];
    constructor(id:string,texte:string,etat:Etat,date:Date,auteur:User,occupant:Support,tags:[]){
        this.id=id;
        this.texte=texte;
        this.etat=etat;
        this.dateCreation=date;
        this.auteur=auteur;
        this.membresup=occupant;
        this.tags=tags;
    }
}
