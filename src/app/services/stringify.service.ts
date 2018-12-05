import { Injectable } from '@angular/core';

import { User } from '../models/user.model';


@Injectable()
export class StringifyService {
  user:User;
  email:string;

  constructor() {
  }

  addUser(user: User,email:string) {
    // this.user.unshift(user);

    localStorage.setItem('user'+email, JSON.stringify
  (user));

  }

  // deletedLog(user: User) {
  //   this.user.forEach((cur, index) => {
  //     if(user.id === cur.id) {
  //       this.user.splice(index, 1);
  //     }
  //   });
  // }

 // updatedLog(user: User) {
 //   this.user.forEach((cur, index) => {
 //     if(user.id === cur.id) {
 //       this.user.splice(index, 1)
 //     }
 //   });
 //   this.user.unshift(user);
 // }
// getLogs(): Observable<User[]> {
 getLogs(email){
  if(localStorage.getItem('user'+email) === null) {
    this.user=this.model() ;

  }
  else {
    this.user = JSON.parse(localStorage.getItem
    ('user'+email));
  }

  return this.user;
 }

 model():User{
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
