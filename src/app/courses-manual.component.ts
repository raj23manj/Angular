
import { Component } from '@angular/core'

//services
import { CoursesService } from './courses.service';

// decorator function
@Component({
  selector: 'courses-manual', // <courses-manual></courses-manual>
  template: `
              <h2>{{ getTitle() }}</h2>
              <ul>
                <li *ngFor="let course of courses">
                  {{ course }}
                </li>
              </ul>
            `
})
export class CoursesManualComponent {
   title = "List of courses";
   courses;

   constructor(service: CoursesService){
      this.courses = service.getCourses();
   }

   getTitle() {
     return this.title;
   }
}
