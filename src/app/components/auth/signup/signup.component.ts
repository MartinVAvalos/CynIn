import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import{ User } from '../../../models/user.model';
import { AuthService } from '../auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [UserService]
})
export class SignupComponent {

  constructor(private authService: AuthService, private router: Router, private userFire: UserService) {

  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;   // NOTE: password is equal to password1.
    this.authService.signupUser(email, password);

    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    this.userFire.onSaveUp(email, firstName, lastName);

    this.router.navigate(['/signin']);
  }

}
