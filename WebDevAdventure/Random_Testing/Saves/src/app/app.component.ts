import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Martin Vera';

  ngOnInit(){
      firebase.initializeApp({
        apiKey: "AIzaSyDMw01DWVoqP8TUBSa197eBSv4FQAKN37w",
        authDomain: "musesaves.firebaseapp.com",
      });
  }
}
