import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";

import { AuthService } from '../auth.service';
import { Member } from '../../shared/member.model';
import { MemberService } from '../../member/member.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  validateEqual: boolean = false;
  constructor(private authService: AuthService, private router: Router,
              private memberService: MemberService, private fire: DataStorageService) {}

  member: Member;

  onSignup(form: HTMLFormElement) {
    this.authService.signupUser(form.value.email, form.value.password);


    this.member = {name: form.value.name, email:form.value.email, password: form.value.password,
      permit: 'mems', totalTime: '0', startTime: '123',
      endTime: '0'};
    this.fire.storeMembers(this.member)
    .subscribe(
      (response) =>console.log(response),
      (error) =>console.log(error)
    );

    this.router.navigate(['/signin']); //navigates page to signin page
  }

}
