import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {

  constructor() { }

}

// constructor(logService: LogService) { }
/*
   @Injectable()
   which means to say angular
   only if this service has dependencies

   says angular to inject dependencies of this class

   when defining components we did not include this because
   when we use @Component decorator it internally included this @Injectable
   decorator
*/
