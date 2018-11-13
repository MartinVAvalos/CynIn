import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../../../models/user.model';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.scss']
})
export class AdminItemComponent implements OnInit {
  @Input() user: User;

  constructor(private memberService: UserService) { }

  ngOnInit() {
  }

  onSelected() {
    // this.memberService.memberSelected.emit(this.member);
  }

}
