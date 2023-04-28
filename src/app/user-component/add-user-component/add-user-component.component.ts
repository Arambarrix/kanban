import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user-component',
  templateUrl: './add-user-component.component.html',
  styleUrls: ['./add-user-component.component.scss']
})
export class AddUserComponentComponent implements OnInit {
  user=new User();
  submitted=false;
  addNewUserForm:FormGroup
  constructor(private builder:FormBuilder,private userService: UserService,private router:Router) {
    this.addNewUserForm=this.builder.group({

    })
  }

  ngOnInit() {
  }
  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.createOne(this.user).subscribe(data => {
      console.log(data)
      this.user = new User();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/']);
  }

}
