
import { Component } from '@angular/core'

//services
import { CoursesService } from './courses.service';

// decorator function
@Component({
  selector: 'courses-manual', // <courses-manual></courses-manual>
  template: `
              <h2>{{title}}</h2>
              <button (click)="onSave($event)">Save</button>
            `
})
export class CoursesManualComponent {
   title = "List of courses";

   onSave($event){
     //$event.stopPropogation; // to stop event propogation
     console.log('button clicked', $event);
   }
}
