import { Component, OnInit } from '@angular/core';
import { Etat } from 'src/app/models/etat';
import { EtatService } from 'src/app/services/etat.service';

@Component({
  selector: 'app-add-etat-component',
  templateUrl: './add-etat-component.component.html',
  styleUrls: ['./add-etat-component.component.scss']
})
export class AddEtatComponentComponent implements OnInit {

  type=1;
  etat=new Etat();
  submitted=false;
  constructor(private etatService: EtatService) {

  }

  ngOnInit() {
  }

  save() {
  
      this.etatService.createOne(this.etat).subscribe(data => {
        console.log(data)
        this.etat = new Etat();
      }, 
      error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}
