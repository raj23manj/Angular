
import { Component } from '@angular/core'

//services
import { CoursesService } from './courses.service';

// decorator function
@Component({
  selector: 'courses-manual', // <courses-manual></courses-manual>
  template: `
              <h2>{{title}}</h2>
              <button (keyup.enter)="onSave($event)">Save</button>
            `
            // <button (keyup)="onSave($event)">Save</button>
})
export class CoursesManualComponent {
   title = "List of courses";

   onSave(){
     //$event.stopPropogation; // to stop event propogation
     //if($event.keyCode === 13) console.log('Enter was pressed');
     console.log('Enter was pressed');

   }
}
