import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http'
import { Server } from 'selenium-webdriver/safari';
import { database } from 'firebase';

import { Member } from './member.model';
import { AuthService } from '../auth/auth.service';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,private uidFromUser: AuthService) { }

  storeMembers(member: Member){
    return this.http.put('https://muse-cynin.firebaseio.com/'+this.uidFromUser.getUid()+'/data.json', member);
  }

  getMembers(){
    return this.http.get('https://muse-cynin.firebaseio.com/'+this.uidFromUser.getUid()+'/data.json')
    .map(
        (response: Response) => {
          const data = response.json();

          return data;
        }
    )
    .catch(
      (error: Response) => {
        return Observable.throw(console.log(Response));
      }
    );
  }

}
