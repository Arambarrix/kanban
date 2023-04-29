import { Component, OnInit } from '@angular/core';
import { Etat } from '../models/etat';
import { MatDialog } from '@angular/material/dialog';
import { EtatService } from '../services/etat.service';
import { AddEtatComponentComponent } from './add-etat-component/add-etat-component.component';
import { UpdateEtatComponentComponent } from './update-etat-component/update-etat-component.component';

@Component({
  selector: 'app-etat-component',
  templateUrl: './etat-component.component.html',
  styleUrls: ['./etat-component.component.scss']
})
export class EtatComponentComponent implements OnInit {

  etats: Etat[];
  etat=new Etat();
  displayedColumns=['id','libelle','actions']

  constructor(private etatService: EtatService,private dialog:MatDialog) {
    this.etats = [];
  }

  ngOnInit() {
    this.etatService.findAll().subscribe(data => {
      this.etats = data;
    });
  }
  addEtat(){
    this.dialog.open(AddEtatComponentComponent)
  }
  onDelete(id:string){
    this.etatService.deleteOne(id).subscribe(
      response => {
        console.log(response);
      },
      error => {
          console.log(error);
      });
    ;
  }
  onUpdate(id:string){
    this.etatService.findOne<Etat>(id).subscribe(data => {
      this.etat = data;
      this.dialog.open(UpdateEtatComponentComponent,{
        data:{
          id:data.id,
          libelle:data.libelle
        }
      })
    },
    error => {
      console.log(error);
    });
   
    
  }
}
