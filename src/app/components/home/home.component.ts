import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { FireserveService} from '../../services/fireserve.service';
import { User } from '../../models/user.model';
import {AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  object: any[] = [];
  user: String;
  constructor(

        private userServices: UserService,
        private fire: FireserveService,
        private aut: AuthService

      ) {
    // this.fire.getSignedIn()
    // .subscribe(
    //   (servers: User) => this.user = servers.email,
    // // servers.email.lastIndexOf("vera") + 0,
    // // servers.email.lastIndexOf("37")),
    //   //str.replace(/^"(.*)"$/, '$1') gets rid of quotations
    //   (error)=> console.log(error)
    // );


  }

  ngOnInit() {
    this.aut.value='1000';
  }
}
