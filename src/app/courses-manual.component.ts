
import { Component } from '@angular/core'

//services
import { CoursesService } from './courses.service';

// decorator function
@Component({
  selector: 'courses-manual', // <courses-manual></courses-manual>
  template: `
              <h2>{{title}}</h2>
              <input #email (keyup.enter)="onSave(email.value)"/>
            `
            // <button (keyup)="onSave($event)">Save</button>
            // <input  (keyup.enter)="onSave($event)"/>
})
export class CoursesManualComponent {
   title = "List of courses";

   onSave(email){
     //$event.stopPropogation; // to stop event propogation
     //if($event.keyCode === 13) console.log('Enter was pressed');
    //  console.log($event.target.value);
    console.log(email);

   }
}
