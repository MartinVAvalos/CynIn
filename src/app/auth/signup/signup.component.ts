import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;   // NOTE: password is equal to password1.
    this.authService.signupUser(email, password)
    this.router.navigate(['/signin'])
  }
}
