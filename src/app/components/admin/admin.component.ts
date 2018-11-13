import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  // providers: [AdminService]
})
export class AdminComponent implements OnInit {
  selectedUser: User;

  constructor(private memberService: UserService) { }

  ngOnInit() {
    // this.eventService.memberSelected
    //   .subscribe(
    //     (event: Event) => {
    //       this.selectedEvent = event;
    //     }
    //   );
  }

}
