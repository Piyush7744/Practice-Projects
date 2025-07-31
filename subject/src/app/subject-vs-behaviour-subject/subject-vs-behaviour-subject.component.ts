import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-vs-behaviour-subject',
  templateUrl: './subject-vs-behaviour-subject.component.html',
  styleUrls: ['./subject-vs-behaviour-subject.component.css']
})
export class SubjectVsBehaviourSubjectComponent implements OnDestroy {
  mySubject = new BehaviorSubject<number>(0);
  data1: number[] = [];

  emitData() {
    this.mySubject.next(1);
    console.log(1);
    setTimeout(() => {
      this.mySubject.next(2);
      console.log(2);
    }, 2000)

    setTimeout(() => {
      this.mySubject.next(3);
      console.log(3);
    }, 3000)

    setTimeout(() => {
      this.mySubject.next(4);
      console.log(4);
    }, 4000)

    setTimeout(() => {
      this.mySubject.next(5);
      console.log(5);
    }, 5000)
  }

  getData() {
    console.log("Subscribed");
    this.mySubject.subscribe(data => {
      this.data1.push(data);
    })
  }

  ngOnDestroy(): void {
    console.log("ng Destroy");
    
  }

}
