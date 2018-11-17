import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../../../models/user.model';
import { UserService } from '../../../../services/user.service';

import { Event } from '../../../../models/event.model';
import { EventService } from '../../../../services/event.service';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.scss']
})
export class AdminItemComponent implements OnInit {
  @Input() user: User;
  @Input() event: Event;

  constructor(private memberService: UserService, private eventService: EventService) { }

  ngOnInit() {
  }

  onSelected() {
    this.eventService.eventSelected.emit(this.event);
  }

}
