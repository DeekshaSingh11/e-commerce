import { Component, OnInit } from '@angular/core';
import { SignUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.userAuthReload();
  }
  signUp(data:SignUp){
console.log("hoi");
console.log(data);
this.userservice.signup(data);
  }

}