import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component'

// interface FavoriteChangedEventArgs {
//   newValue: boolean;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 23 app';

  // post = {
  //   title: 'Angular 23 app',
  //   isFavotite: true
  // };
  //
  // onFavoriteChange(eventArgs: FavoriteChangedEventArgs){
  //   console.log("Favorite Changed:", eventArgs );
  // }

  // courses = [1,2];

  // viewMode = 'somethingelse';

  // courses = [
  //             { id: 1, name: 'course1'},
  //             { id: 2, name: 'course2'},
  //             { id: 3, name: 'course3'}
  //           ];

  courses;

  onAdd() {
    this.courses.push({ id: 4, name: 'course4'});
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  loadCourses() {
    this.courses = [
                { id: 1, name: 'course1'},
                { id: 2, name: 'course2'},
                { id: 3, name: 'course3'}
              ];
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }

}
