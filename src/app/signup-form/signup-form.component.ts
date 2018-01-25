import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserNameValidators } from './username.validators';



@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {
  form = new FormGroup({
    //username: new FormGroup({ ... })
    username: new FormControl('',[ Validators.required,
                                   Validators.minLength(3),
                                   UserNameValidators.cannotContainSpace
                                 ],
                                 UserNameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }

  login() {
    // usen with specia auth service
    // let isValid = authServise.login(this.form.value);
    //
    // if(!isValid){
    //   /*
    //     setting errors at individual level
    //     this.username.setErrors
    //   */
    //   // setting errors at form level
    //   this.form.setErrors({
    //     invalidLogin: true
    //   });
    // }

    this.form.setErrors({
      invalidLogin: true
    });
  }
}
