import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectVsBehaviourSubjectComponent } from './subject-vs-behaviour-subject/subject-vs-behaviour-subject.component';
import { OfAndFromComponent } from './of-and-from/of-and-from.component';

const routes: Routes = [
  {
    path:"behaviourSubject",component:SubjectVsBehaviourSubjectComponent
  },
  {
    path:"of",component:OfAndFromComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
