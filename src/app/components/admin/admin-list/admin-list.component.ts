import { Component, OnInit } from '@angular/core';

import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

import { Event } from '../../../models/event.model';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  events: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

}
