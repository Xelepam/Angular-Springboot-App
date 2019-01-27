import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'omar.e.castro';
  password = '';
  errorMessage = 'Invalid credentials!'
  invalidLogin = false;

  //Need an instance of the Router
  //Get it with Dependency Injection
  //Include it as an argument in the constructor
  constructor(
    private router : Router,
    private hardcodedAuthenticationService : HardcodedAuthenticationService
    ) { }

  ngOnInit() {
  }

handleLogin() {
  //Hardcode temporary authentication to login componenet in the mean time
  //if(this.username === "omar.e.castro" && this.password === "1234") {

  if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {

    //Redirect to the Welcome Page
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username])

    } else {
      this.invalidLogin = true;
    }

  }

}
