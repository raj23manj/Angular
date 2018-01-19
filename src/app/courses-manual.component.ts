
import { Component } from '@angular/core'

//services
import { CoursesService } from './courses.service';

// decorator function
@Component({
  selector: 'courses-manual', // <courses-manual></courses-manual>
  template: `
              <h2>{{title}}</h2>
              <h2 [textContent]="title"></h2>
              <img src="{{ imageUrl }}">
              <img [src]="imageUrl">
            `
})
export class CoursesManualComponent {
   title = "List of courses";
   imageUrl = "https://www.thespruce.com/how-to-care-for-puppies-1117475";
}
