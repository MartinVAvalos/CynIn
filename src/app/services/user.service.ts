import { EventEmitter, Injectable } from '@angular/core';
import{ User } from '../models/user.model';
import{ SignedIn } from '../models/signed-in.model';
import { FireserveService} from './fireserve.service';
import { NgForm } from '@angular/forms';

@Injectable()
export class UserService {
  userSelected = new EventEmitter<User>();
  user:User;
  signed:SignedIn;

  constructor(private fire: FireserveService) {
    this.user = {

      nameFirst: '',
      nameLast: '',
      email: '',

      isAdmin: false,

      timein: null,
      timeout: null,
      totalTimeMin: 0     //keeps track of total time
    };

    this.signed = {
      email: '',
      nameFirst: '',
      nameLast: '',
      timein: null,
      timeout: null,
      totalTimeMin: null,
    }
  }

  onSaveUp(email: string, nameFirst: string, nameLast: string) {
    this.user.email = email;
    this.user.nameFirst = nameFirst;
    this.user.nameLast = nameLast;

    //save yo shit
    this.fire.storeUser(this.user)
     .subscribe(
       (response) =>console.log(response),
       (error) =>console.log(error)
       );
  }

  onSaveIn(email: string, time: Date) {
    this.user.email = email;
    this.user.timein = time;

    //save yo shit
    this.fire.storeUser(this.user)
     .subscribe(
       (response) =>console.log(response),
       (error) =>console.log(error)
       );
  }

  signedIn(email: string, nameFirst: string, nameLast: string, timein: Date, timeout, totalTimeMin) {
    this.signed.email = email;
    this.signed.nameFirst = nameFirst;
    this.signed.nameLast = nameFirst;
    this.signed.timein = timein;
    this.signed.timeout = timeout;
    this.signed.nameFirst = totalTimeMin;

    //save yo shit
    this.fire.signedIn(email, this.signed)
     .subscribe(
       (response) =>console.log(response),
       (error) =>console.log(error)
       );
  }


  // serviceLogin(email: string, nameFirst: string, nameLast: string){
  //   this.user.email = email;
  //   this.user.nameFirst = nameFirst;
  //   this.user.nameLast = nameLast;
  //
  //   //save yo shit
  //   this.fire.storeUser(this.user)
  //    .subscribe(
  //      (response) =>console.log(response),
  //      (error) =>console.log(error)
  //      );
  //
  //   // this.user.timeinHours = 5;//time.getHours();
  //   // this.user.timeinMinutes = 4; //time.getMinutes();
  //   // console.log(this.user.timeinHours);
  //   // console.log('here ghjghghgghghgghhghghg');
  // }

  logout(){

  }

  sendTime(){

  }

  display_punch():string{
    return "stuff";
    // return  this.display=this.user.timeinHours+":"+this.user.timeinMinutes;
  }
}
