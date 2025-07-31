import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectVsBehaviourSubjectComponent } from './subject-vs-behaviour-subject/subject-vs-behaviour-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectVsBehaviourSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
