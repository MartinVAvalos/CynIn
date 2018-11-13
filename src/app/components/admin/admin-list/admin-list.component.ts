import { Component, OnInit } from '@angular/core';

import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  user: User[];

  constructor(private memberService: UserService) { }

  ngOnInit() {
    // this.member = this.memberService.getMembers();
  }

}
