import * as firebase from 'firebase';

export class AuthService {
  value:string = '10000';


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

  getUid(): any {
    firebase.auth().onAuthStateChanged((user) => {
      return user.uid;
    });
    return this.value;
  }

}
