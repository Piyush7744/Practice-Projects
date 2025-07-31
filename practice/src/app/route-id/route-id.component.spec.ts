import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteIDComponent } from './route-id.component';

describe('RouteIDComponent', () => {
  let component: RouteIDComponent;
  let fixture: ComponentFixture<RouteIDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteIDComponent]
    });
    fixture = TestBed.createComponent(RouteIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
