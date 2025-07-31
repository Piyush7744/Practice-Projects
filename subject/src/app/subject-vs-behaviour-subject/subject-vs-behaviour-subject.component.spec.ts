import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectVsBehaviourSubjectComponent } from './subject-vs-behaviour-subject.component';

describe('SubjectVsBehaviourSubjectComponent', () => {
  let component: SubjectVsBehaviourSubjectComponent;
  let fixture: ComponentFixture<SubjectVsBehaviourSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectVsBehaviourSubjectComponent]
    });
    fixture = TestBed.createComponent(SubjectVsBehaviourSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
