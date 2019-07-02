// Purpose: Manages signin

import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { UserService } from '../../../services/user.service';
import { FireserveService } from '../../../services/fireserve.service';

import{ User } from '../../../models/user.model';

import * as firebase from 'firebase';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  user: User;
  constructor(
    private authService: AuthService,
    private router: Router,
    private userFire: UserService,
    private fire: FireserveService,
    private userServices: UserService) {

      this.user = userServices.model();
    }

  onSignin(form: NgForm) {
    this.authService.value = null;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }

 
}

