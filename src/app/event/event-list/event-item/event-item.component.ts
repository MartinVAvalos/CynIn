import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../../shared/event.model';
import { EventService } from '../../event.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {
  @Input() event: Event;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  onSelected() {
    this.eventService.eventSelected.emit(this.event);
  }

}