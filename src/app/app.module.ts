import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// components
import { CoursesManualComponent } from './courses-manual.component';
//import { CoursesComponent } from './courses/courses.component';

//services
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesManualComponent
    //CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
