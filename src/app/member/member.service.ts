import { Member } from '../shared/member.model';
import { EventEmitter } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';

export class MemberService {
  private members: Member[] = [
      new Member('Kenitho', 'Dae', 'guerovera37@icloud.com', 'yaboi', 'Guard1an', '0', '0', '00'),
      new Member('Emanuel', 'Esgae', 'red@gmail.com', 'esgae', 'member', '0', '0', '00')
    ];
//NOTE: Line 6 ~ 'Guard1an' means the account is given admin permissions. 'member' is given simple permissions
    getMembers() {
      return this.members.slice();
    }
}
