import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http'
import { Server } from 'selenium-webdriver/safari';
import {User} from './../models/user.model';
import { database } from 'firebase';
import {AuthService} from './../components/auth/auth.service';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class FireserveService {

    constructor(private http: Http,private uidFromUser: AuthService) { }

    storeServers(servers: User){

      //www.google.com/dog
      //ww.google.com/cats
 return this.http.put('https://muse-cynin.firebaseio.com/'+this.uidFromUser.getUid()+'/data.json', servers);
    }
    getlist(){

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
