import * as firebase from 'firebase';

export class AuthService {
  value:string;
  num: number;


  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => console.log(response)
      )
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => console.log(response)
      )
      .catch(
        error => console.log(error)
      );
      this.value = firebase.auth().currentUser.uid;
   //   console.log(this.value); this worked
  }
  getUid():string{
    return this.value=firebase.auth().currentUser.uid;
  }

   set_uid(){
     // this.num = Math.floor(Math.random() * 6) + 1;
     this.value=null;
   }

}
