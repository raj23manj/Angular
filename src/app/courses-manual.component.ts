
import { Component } from '@angular/core'

//services
import { CoursesService } from './courses.service';

// decorator function
@Component({
  selector: 'courses-manual', // <courses-manual></courses-manual>
  template: `
              <h2>{{title}}</h2>
              <table>
                <td [attr.colspan]="colSpan"> for attr binding need to attr. 99% cases not needed but rare cases</td>
              </table>
            `
})
export class CoursesManualComponent {
   title = "List of courses";
   colSpan = 2;
}
