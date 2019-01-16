//Anything
// Purpose: Service for signing in and signing up

import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  value:string;

  constructor(private route: Router) {
    
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );

  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( // the info has come back
        // response => console.log(response)
        response =>{
          this.value = firebase.auth().currentUser.uid;
          this.route.navigate(['/member']);
  
        }
        
      )
      .catch( // if info doesnt exist or didnt come back
        error => console.log(error)
        // flash message
      );
      this.value = firebase.auth().currentUser.uid;
  }

  getUid():string{
   return this.value=firebase.auth().currentUser.uid;
  }


}
