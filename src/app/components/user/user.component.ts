import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

import {FireserveService} from './../../services/fireserve.service';
import{AuthService} from '../auth/auth.service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user:User;

  constructor(
    private fire:FireserveService,
    private serviceToLoggout: AuthService,
    private userService: UserService,
    private ru:Router) {}

  ngOnInit() {
  }

  login(){
    this.userService.serviceLogin();
  }

  onSave() {
   this.fire.storeServers(this.user)
    .subscribe(
      (response) =>console.log(response),
      (error) =>console.log(error)
      );
  }
  onFetch(){
    this.fire.getlist()
    .subscribe(
      (servers: User) =>this.user=servers,
      (error)=> console.log(error)
    );
  }
 logout(){
  this.serviceToLoggout.set_uid();
    this.ru.navigate(['/signin']);
 }

}
