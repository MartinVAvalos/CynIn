import { Injectable } from '@angular/core';
import{User} from './../models/user.model'

@Injectable()
export class UserService {
  user:User;
  display:string;

  constructor() {
    this.user ={

      nameFirst: '',
      nameLast: '',
      email: '',

      isAdmin: false,
      timeinHours: null,
      timeinMinutes: null,

      timeoutHours: null,   // keeps track when they came out
      timeoutMinutes: null,

      totalTimeMin:null,
      totalTimeHours:null      //keeps track of total time
    }


  }

  serviceLogin(){


    this.user.timeinHours = 5;//time.getHours();
    this.user.timeinMinutes = 4; //time.getMinutes();
    console.log(this.user.timeinHours);
    console.log('here ghjghghgghghgghhghghg');
  }

  logout(){

  }

  sendTime(){

  }

  display_punch():string{
    return "stuff";
    // return  this.display=this.user.timeinHours+":"+this.user.timeinMinutes;
  }
}
