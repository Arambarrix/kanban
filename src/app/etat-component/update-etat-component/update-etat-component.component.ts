import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Etat } from 'src/app/models/etat';
import { EtatService } from 'src/app/services/etat.service';

@Component({
  selector: 'app-update-etat-component',
  templateUrl: './update-etat-component.component.html',
  styleUrls: ['./update-etat-component.component.scss']
})
export class UpdateEtatComponentComponent implements OnInit {

  currentEtat=new Etat();
  constructor(private service: EtatService,@Inject(MAT_DIALOG_DATA) public data: Etat) {

  }

  ngOnInit() {
    console.log(this.data);
    
  }
  type=1;
  submitted=false;

  save() {
      this.service.updateOne(this.data.id,this.currentEtat).subscribe(data => {
        console.log(data)
        this.currentEtat = new Etat();
      }, 
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}
