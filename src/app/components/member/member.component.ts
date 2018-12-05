import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  selectedUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userSelected
      .subscribe(
        (user: User) => {
          this.selectedUser = user;
        }
      );
  }

}
