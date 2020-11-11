import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';

import { AuthserviceService } from '../../services/auth/authservice.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthserviceService) { }

  ngOnInit(): void {
  }

  userModel = new User('', '');

  // Logs a user through the login route.
  logIn() {
    this.authService.loginUser(this.userModel)
    .subscribe(
      data => console.log(data),
      error => console.error("ERROR!", error)
    );
  }

}
