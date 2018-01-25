import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UserNameValidators {
  static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
    if((control.value as string).indexOf(' ') >= 0)
      return{ cannotContainSpace: true}; //

      return null;
  }

  // asyncronous validators
  static shouldBeUnique(control: AbstractControl)  : Promise<ValidationErrors | null> {
    // time being mocking a server

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value == 'rajdiv')
          resolve({ shouldBeUnique: true });
        else
          resolve(null);
      }, 2000);
    });
  }
}


  // return{ required }
  //
  // return{ minlength: {
  //           requiredLength: 10,
  //           actualLength: control.value.length
  //       } }
