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

  constructor(
      private http: Http,
      private uidFromUser: AuthService) {}

  storeUser(server : User){
    return this.http.put('https://muse-cynin.firebaseio.com/'+this.uidFromUser.getUid()+'/data.json', server);
  }

  getUser(){
    return this.http.get('https://muse-cynin.firebaseio.com/'+this.uidFromUser.getUid()+'/data.json')
    .map(
          (response: Response) => {
            const data = response.json();
            console.log("Hello there "+response.json());
            return data;
          }
      )
      .catch(
        (error: Response) => {
          return Observable.throw(console.log(Response));
        }
      );
  }

  // signedIn(email: string, server : SignedIn){
  //   return this.http.put('https://muse-cynin.firebaseio.com/signed-in/' + email + '.json', server);
  // }

  // getSignedIn(){
  //
  //   return this.http.get('https://muse-cynin.firebaseio.com/signed-in.json')
  //   .map(
  //         (response: Response) => {
  //           const data = response.json();
  //           return data;
  //         }
  //     )
  //     .catch(
  //       (error: Response) => {
  //         return Observable.throw(console.log(Response));
  //       }
  //     );
  // }
  storeStrings(server : User){

    return this.http.put('https://muse-cynin.firebaseio.com/'+this.uidFromUser.getUid()+'/data.json', server);
  }

}
