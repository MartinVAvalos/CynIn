import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http'
import { Server } from 'selenium-webdriver/safari';
import { User } from './../models/user.model';
import{ SignedIn } from '../models/signed-in.model';
import { database } from 'firebase';
import {AuthService} from './../components/auth/auth.service';


import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class FireserveService {
  myurl:string='https://muse-cynin.firebaseio.com/';

  constructor(
      private http: Http,
      private uidFromUser: AuthService) {}

  storeUser(server : User){
    return this.http.put(this.myurl+this.uidFromUser.getUid()+'/data.json', server);
  }

  getUser(){
    return this.http.get(this.myurl+this.uidFromUser.getUid()+'/data.json')
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
