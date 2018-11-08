import { Component, OnInit } from '@angular/core';

import { Member } from '../shared/member.model';
import { MemberService } from './member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  providers: [MemberService]
})
export class MemberComponent implements OnInit {

  members: Member[];

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

}
