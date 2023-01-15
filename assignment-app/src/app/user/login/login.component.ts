import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { User } from '../user.model';
import { LoggingService } from 'src/app/shared/logging.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email=""
  password=""
  constructor(private userService:UserService, private router:ActivatedRoute, private AuthService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("onSubmit : " + this.email + " " + this.password);
    this.userService.getUserByEmail(this.email)
  }

  login() {
    if(!this.AuthService.loggedIn) {
      this.AuthService.logIn();
      console.log("login");
    } else {
      this.AuthService.logOut();
      console.log("logout");
    }
  }

}
