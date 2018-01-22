import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 23 app';

  post = {
    title: 'Angular 23 app',
    isFavotite: true
  };

}
