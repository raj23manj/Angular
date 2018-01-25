import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UserNameValidators {
  static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
    if((control.value as string).indexOf(' ') >= 0)
      return{ cannotContainSpace: true}; //

      return null;
  }

  static shouldBeUnique(control: AbstractControl)  : ValidationErrors | null
    // time being mocking a server
    setTimeout(() => {
        if(control.value == 'rajdiv')
          return { shouldBeUnique: true };

        return null;
      }
    }, 2000);

    //return null;
    /*
     => there will be an error coz this function expects a null or ValidationErrors
        in case of setTimeout only, but this is wrong so do't do this
    */

}


  // return{ required }
  //
  // return{ minlength: {
  //           requiredLength: 10,
  //           actualLength: control.value.length
  //       } }
