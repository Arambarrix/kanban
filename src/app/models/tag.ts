export class Tag {
    id: string;
    libelle: string;
    tickets:[]
    constructor(id:any,libelle:any,tickets:[]){
        this.id=id;
        this.libelle=libelle;
        this.tickets=tickets;
    }
}
