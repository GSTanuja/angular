import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlePipe } from './pipes/title.pipe';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RenderhighlightDirective } from './directives/renderhighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    TitlePipe,
    HomeComponent,
    CourseComponent,
    ContactusComponent,
    PagenotfoundComponent,
    CourseDetailsComponent,
    HighlightDirective,
    RenderhighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
