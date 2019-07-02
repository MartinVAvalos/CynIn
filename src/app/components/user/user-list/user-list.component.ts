import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

import { Event } from '../../../models/event.model';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  events: Event[];
  user: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

}
