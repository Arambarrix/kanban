import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user-component',
  templateUrl: './update-user-component.component.html',
  styleUrls: ['./update-user-component.component.scss']
})
export class UpdateUserComponentComponent implements OnInit {

  currentUser=new User();
  constructor(private userService: UserService,private router:Router,@Inject(MAT_DIALOG_DATA) public data: User) {

  }

  ngOnInit() {
    console.log(this.data);
    
  }
  type=1;
  submitted=false;

  save() {
      this.userService.updateOne(this.data.id,this.currentUser).subscribe(data => {
        console.log(data)
        this.currentUser = new User();
      }, 
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}