
import { Component } from '@angular/core'

//services
import { CoursesService } from './courses.service';

// decorator function
@Component({
  selector: 'courses-manual', // <courses-manual></courses-manual>
  template: `
              <h2>{{title}}</h2>
              <input [(ngModel)]= "email" (keyup.enter)="onSave()"/>
            `
            // <button (keyup)="onSave($event)">Save</button>
            // <input  (keyup.enter)="onSave($event)"/>
            // <input #email (keyup.enter)="onSave(email.value)"/>
            //<input [value]= "email" (keyup.enter)="onSave()"/>
            //<input [value]= "email" (keyup.enter)="email=$event.target.value ;onSave()"/>
})
export class CoursesManualComponent {
   title = "List of courses";
   email = 'me@example.com';

   onSave(){
     //$event.stopPropogation; // to stop event propogation
     //if($event.keyCode === 13) console.log('Enter was pressed');
    //  console.log($event.target.value);
    console.log(this.email);

   }
}
