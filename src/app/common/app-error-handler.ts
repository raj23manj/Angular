import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    console.log('An Unexpected Error Occurred.');
    console.log('error');
  }
}
