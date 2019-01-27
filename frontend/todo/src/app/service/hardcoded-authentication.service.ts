import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {

    if(username === "omar.e.castro" && password === "1234") {
      sessionStorage.setItem('authenticateUser', username)
      return true;
    } return false;

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null) // Note if user is equal to null then the user is NOT logged in
    // !(false) -> true
    // !(true) -> false
  }
}
