import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [EventService]
})
export class AdminComponent implements OnInit {
  selectedUser: User;
  selectedEvent: Event;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.eventSelected
      .subscribe(
        (event: Event) => {
          this.selectedEvent = event;
        }
      );
  }


}
