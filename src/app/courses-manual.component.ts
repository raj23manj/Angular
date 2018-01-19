
import { Component } from '@angular/core'

//services
import { CoursesService } from './courses.service';

// decorator function
@Component({
  selector: 'courses-manual', // <courses-manual></courses-manual>
  template: `
              <h2>{{title}}</h2>
              <button class="btn btn-primary">Save</button>
            `
})
export class CoursesManualComponent {
   title = "List of courses";
   colSpan = 2;
}
