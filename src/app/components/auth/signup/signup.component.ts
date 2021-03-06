// Purpose: Manages signup

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import{ User } from '../../../models/user.model';
import { AuthService } from '../auth.service';
import { UserService } from '../../../services/user.service';

import { FireserveService } from '../../../services/fireserve.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [UserService]
})
export class SignupComponent {
  user: User;
  constructor(
    private authService: AuthService,
    private router: Router,
    private userFire: UserService,
    private fire: FireserveService,
    private userService: UserService
    ) {
    this.user = userService.model(); // bring in the model I created in the userServices


  } 

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;   // NOTE: password is equal to password1.
    this.authService.signupUser(email, password);

    this.router.navigate(['/signin']);



    
  }


}
