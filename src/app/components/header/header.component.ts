// Purpose: Gives user's ability to navigate throughout the Cynin

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private ru:Router) {}

  ngOnInit() {
  }

}
