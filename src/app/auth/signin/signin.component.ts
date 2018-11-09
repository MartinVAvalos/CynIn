import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';

import { AuthService } from '../auth.service';
import { Member } from '../../shared/member.model';
import { MemberService } from '../../member/member.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  @Output() signedIn = new EventEmitter<NgForm>();

  constructor(private authService: AuthService, private router: Router,
              private memberService: MemberService, private fire: DataStorageService) {
      this.router.errorHandler = (error: any) => {
        this.router.navigate(['home']);
      } //Catch any errors when navigating. Setting default route to home on error.
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);  //signs in

    this.signedIn.emit(form);  //notifies header that membser signed in
    this.router.navigate(['/home']);  //navigates page to home
  }
}
