import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectVsBehaviourSubjectComponent } from './subject-vs-behaviour-subject/subject-vs-behaviour-subject.component';
import { CustomDirectiveDirective } from './CustomeDirective/custom-directive.directive';
import { CustomDirective2Directive } from './CustomeDirective/custom-directive2.directive';
import { OfAndFromComponent } from './of-and-from/of-and-from.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectVsBehaviourSubjectComponent,
    CustomDirectiveDirective,
    CustomDirective2Directive,
    OfAndFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
