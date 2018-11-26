import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { FireserveService} from '../../services/fireserve.service';
import { User } from '../../models/user.model';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  object: any[] = [];
  user: String;
  constructor(private userServices: UserService, private fire: FireserveService) {
    this.fire.getSignedIn()
    .subscribe(
      (servers: User) => this.user = servers.email,
      //str.replace(/^"(.*)"$/, '$1') gets rid of quotations
      (error)=> console.log(error)
    );
  }

  ngOnInit() {
  }
}
