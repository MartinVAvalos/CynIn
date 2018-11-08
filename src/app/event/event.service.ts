import { EventEmitter, Injectable } from '@angular/core';
import { Event } from '../shared/event.model';


@Injectable()
export class EventService {
  eventSelected = new EventEmitter<Event>();

  private events: Event[] = [
    new Event('Hackathon', 'Oct 10, 2018', '2:30 PM', '5:30 PM', 'We`ll be helping students learn the basics of hacking'),
    new Event('Pentesting', 'Oct 13, 2018', '4:00 PM', '6:00 PM', 'Learn about hacking!')
  ];

  getEvents() {
    return this.events.slice();
  }

}
