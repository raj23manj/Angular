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

  viewMode = 'somethingelse';

}
