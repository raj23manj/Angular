
import { Component } from '@angular/core'

// decorator function
@Component({
  selector: 'courses-manual', // <courses></courses>
  template: '<h2>{{ getTitle() }}</h2>'
})
export class CoursesManualComponent {
 title = "List of courses"

 getTitle() {
   return this.title;
 }
}
