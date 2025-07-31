import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectVsBehaviourSubjectComponent } from './subject-vs-behaviour-subject/subject-vs-behaviour-subject.component';

const routes: Routes = [
  {
    path:"behaviourSubject",component:SubjectVsBehaviourSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
