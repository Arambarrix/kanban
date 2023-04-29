import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import {MatDialog} from '@angular/material/dialog';
import { AddUserComponentComponent } from './add-user-component/add-user-component.component';
import { AddTicketComponentComponent } from '../ticket-component/add-ticket-component/add-ticket-component.component';
import { UpdateUserComponentComponent } from './update-user-component/update-user-component.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';





@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {

  users: User[];
  user=new User();
  displayedColumns=['id','nom','actions']

  constructor(private userService: UserService,private dialog:MatDialog) {
    this.users = [];
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
  addUser(){
    this.dialog.open(AddUserComponentComponent)
  }
  onDelete(id:string){
    this.userService.deleteOne(id).subscribe(
      response => {
        console.log(response);
      },
      error => {
          console.log(error);
      });
    ;
  }
  onUpdate(id:string){
    this.userService.findOne(id).subscribe(data => {
      this.user = data;
      this.dialog.open(UpdateUserComponentComponent,{
        data:{
          id:data.id,
          nom:data.nom
        }
      })
    },
    error => {
      console.log(error);
    });
   
    
  }
}