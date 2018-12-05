import { Component, OnInit,  Input } from '@angular/core';

import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

import { Event } from '../../../models/event.model';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.scss']
})
export class AdminDetailComponent implements OnInit {
  @Input() user: User;
  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }

}
