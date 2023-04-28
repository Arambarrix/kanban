import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import {MatDialog} from '@angular/material/dialog';
import { AddUserComponentComponent } from './add-user-component/add-user-component.component';
import { AddTicketComponentComponent } from '../ticket-component/add-ticket-component/add-ticket-component.component';




@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {

  users: User[];

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
}