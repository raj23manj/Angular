import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// components
import { CoursesManualComponent } from './courses-manual.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

//import { CoursesComponent } from './courses/courses.component';

//services
import { CoursesService } from './courses.service';
import { PostService } from './services/post.service';

//Pipes
import { SummaryPipe } from './summary.pipe';


//Directives
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesManualComponent,
    SummaryPipe,
    FavoriteComponent,
    BootstrapPanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent
    //CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
