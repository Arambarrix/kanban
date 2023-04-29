import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { UserComponentComponent } from '../user-component.component';
import { SupportService } from 'src/app/services/support.service';
import { Support } from 'src/app/models/support';

@Component({
  selector: 'app-add-user-component',
  templateUrl: './add-user-component.component.html',
  styleUrls: ['./add-user-component.component.scss']
})
export class AddUserComponentComponent implements OnInit {

  type=1;
  user=new User();
  submitted=false;
  constructor(private supportService:SupportService,private userService: UserService,private router:Router) {

  }

  ngOnInit() {
  }
  newUser(): void {    
    this.submitted = false;
    this.user = new User();
  }

  save() {
    if(this.type==0){
      this.userService.createOne(this.user).subscribe(data => {
        console.log(data)
        this.user = new User();
        this.gotoList();
      }, 
      error => console.log(error));
    }
    else{
      this.supportService.createOne(this.user).subscribe(data => {
        console.log(data)
        this.user = new Support();
        this.gotoList();
      }, 
      error => console.log(error));
    }
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    this.router.navigate([UserComponentComponent]);
  }

}
