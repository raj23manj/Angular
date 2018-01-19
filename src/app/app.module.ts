import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// components
import { CoursesManualComponent } from './courses-manual.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesManualComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
