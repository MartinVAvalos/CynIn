import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../../../models/event.model';
import { EventService } from '../../../../services/event.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() event: Event;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  onSelected() {
    this.eventService.eventSelected.emit(this.event);
  }

  }
