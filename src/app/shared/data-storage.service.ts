import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { MemberService } from '../member/member.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,  private memberService: MemberService) {}

  storeMembers() {
    return this.http.put('https://muse-cynin.firebaseio.com/data.json', this.memberService.getMembers());
  }
  // this.http.post(    post
  // this.http.put(     put overwrites old data

  getMembers(members: any[]) {
    return this.http.get('https://muse-cynin.firebaseio.com/data.json');
  }

}
