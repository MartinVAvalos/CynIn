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

  isSignedIn(value) {
    return value;
  }

  onLogout() {
    this.authService.set_uid();
    this.ru.navigate(['/home']);
  }
}
