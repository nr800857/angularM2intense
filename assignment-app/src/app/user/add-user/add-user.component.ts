import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { User } from '../user.model';
import { LoggingService } from 'src/app/shared/logging.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  nom=""
prenom=""
email=""
password=""
  constructor(private userService:UserService, private router:ActivatedRoute, private AuthService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("onSubmit : " + this.nom + " " + this.prenom + " " + this.email + " " + this.password);
    let newUser = new User();
    newUser.nom = this.nom;
    newUser.prenom = this.prenom;
    newUser.email = this.email;
    newUser.password = this.password;
    newUser.id = Math.floor(Math.random()*100000000000000000);
    this.userService.addUser(newUser)
    .subscribe((reponse) => {
      console.log(reponse.message);
    });
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
