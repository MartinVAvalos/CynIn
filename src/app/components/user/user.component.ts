// Purpose: User Component will be displaying User information. Uses UserService to manipulate User info.
// Currently doesn't do anything due to incapability of fetching data from firebase

import { Component, OnInit } from '@angular/core';

import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [EventService]
})
export class UserComponent implements OnInit {
  selectedEvent: Event;

  constructor(private eventService: EventService) {}

    ngOnInit() {
      this.eventService.eventSelected
        .subscribe(
          (event: Event) => {
            this.selectedEvent = event;
          }
        );
    }

}
