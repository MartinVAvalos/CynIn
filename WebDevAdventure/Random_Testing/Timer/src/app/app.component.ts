import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fHours: number;
  fMinutes: number;
  fFlag: boolean = false;  //Displays semicolon for onStart() button

  sHours: number;
  sMinutes: number;
  sFlag: boolean = false; //Displays semicolon for onSecond() button

  math: boolean = false;

  mathHours: number;
  mathMintes: number;

  onStart() {
    var time = new Date();

    this.fHours = time.getHours();
    this.fMinutes = time.getMinutes();
    this.fFlag = true;
  }

  onSecond() {
    var time = new Date();

    this.sHours = time.getHours();
    this.sMinutes = time.getMinutes();
    this.sFlag = true;
    this.math = true;
    this.mathHours = this.sHours - this.fHours;
    this.mathMintes = this.sMinutes - this.fMinutes;
  }

}
