
import { Component } from '@angular/core'

// decorator function
@Component({
  selector: 'courses-manual', // <courses></courses>
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
 courses = ["course1", "course2", "course3"]

 getTitle() {
   return this.title;
 }
}
