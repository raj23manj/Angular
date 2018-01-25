import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UserNameValidators {
  static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
    if((control.value as string).indexOf(' ') >= 0)
      return{ cannotContainSpace: true}; //

      return null;
  }
}


  // return{ required }
  //
  // return{ minlength: {
  //           requiredLength: 10,
  //           actualLength: control.value.length
  //       } }
