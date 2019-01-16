// Purpose: Service manages users. This will be used for both Member and Admin

import { EventEmitter, Injectable } from '@angular/core';
import{ User } from '../models/user.model';



export class UserService {
  userSelected = new EventEmitter<User>();
  user:User;


  constructor(
    ) {

    this.user = {

      nameFirst: '',
      nameLast: '',
      email: '',

      isAdmin: false,

      timein: null,
      timeout: null,
      totalTimeMin: 0     //keeps track of total time
    };


  }




  model(){
    this.user = {

      nameFirst: '',
      nameLast: '',
      email: '',

      isAdmin: false,

      timein: null,
      timeout: null,
      totalTimeMin: 0
    };
    return this.user;
  }

}
