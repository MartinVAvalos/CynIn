import { Component, OnInit } from '@angular/core';

import { Event } from '../shared/event.model';
import { EventService } from './event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  providers: [EventService]
})
export class EventComponent implements OnInit {
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