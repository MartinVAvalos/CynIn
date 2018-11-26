import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(private authService: AuthService, private router: Router, private userFire: UserService) { }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);

    var time = new Date();
    // this.userFire.onSaveIn(email, time);
    // console.log("Time is "+time.getHours() + ":" + time.getMinutes());
    this.userFire.signedIn(email, 'Martin', 'Vera', time, null, null);

    this.router.navigate(['/home']);
  }
}
