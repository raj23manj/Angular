
import { Component } from '@angular/core'

//services
import { CoursesService } from './courses.service';

// decorator function
@Component({
  selector: 'courses-manual', // <courses-manual></courses-manual>
  template: `
              {{ course.title | uppercase | lowercase }} <br/>
              {{ course.students | number }} <br/>
              {{ course.rating | number:'2.2-2' }} <br/>
              {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
              {{ course.releaseDate | date:'shortDate' }} <br/>
            `
})
export class CoursesManualComponent {
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }
}
