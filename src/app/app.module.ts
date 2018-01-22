import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

// components
import { CoursesManualComponent } from './courses-manual.component';
import { FavoriteComponent } from './favorite/favorite.component';

//import { CoursesComponent } from './courses/courses.component';

//services
import { CoursesService } from './courses.service';

//Pipes
import { SummaryPipe } from './summary.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CoursesManualComponent,
    SummaryPipe,
    FavoriteComponent
    //CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
