import * as firebase from 'firebase';

export class AuthService {
  value:string = '1000';


  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => console.log(response)
      )
      .catch(
        error => console.log(error)
      );
      this.value = firebase.auth().currentUser.uid;
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => console.log(response)
      )
      .catch(
        error => console.log(error)
      );

  }

  getUid(): any {
    return this.value;
  }

}
