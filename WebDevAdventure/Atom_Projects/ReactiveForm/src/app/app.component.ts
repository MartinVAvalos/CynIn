import { Component,  OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup,  Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris',  'Linh', 'Hope']

  ngOnInit() {
    // We initialize the form here. We initialize before rendering the template.
    // The javascript object between the brackets {} of line 16 and configures the form.
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username': new FormControl(null,  [Validators.required,  this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required,  Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signupForm.setValue({
      'userData': {
        'username':'Lucina',
        'email': 'fire@emblem.com'
      },
      'gender': 'female',
      'hobbies': []
    });
    const control = new FormControl('Hero');
    (<FormArray>this.signupForm.get('hobbies')).push(control);
    this.signupForm.patchValue({
      'userData': {
        'username': 'Linh'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    // In the line below we check if control.value is part of the array. If it is not part of the array, it
    // will return -1. Angular interprets -1 as true,  which is why we include !== -1
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true}
    }
    return null;
  }

  //NOTE: Line 47 handles asynchronous data
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        }
        else {
          resolve(null);
        }
      },1500);
    });
    return promise;
  }
}
