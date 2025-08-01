import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'subject';
  observableValue = " "
  subjectValue: any = " "

  ob1 = 0;
  ob2 = 0;

  sb1 = 0;
  sb2: any = 0;
  toDestroy = true;

  destroyButton() {
    this.toDestroy = !this.toDestroy;
  }

  observableData() {
    let myObservable = new Observable<any>(observer => {
      // observer.next("Hello from observable");
      observer.next(Math.random() * 10 + 1);

    });

    myObservable.subscribe(data => {
      this.ob1 = data;
    })

    myObservable.subscribe(data => {
      this.ob2 = data;
    })
  }


  subjectData() {
    let mySubject = new Subject<number>();

    mySubject.next(1);
    console.log("1 emitted")
    // will lost this data since we are emitting data after that we are subscribing to it.

    mySubject.next(10);

    mySubject.subscribe(data => {
      this.sb1 = data;
    })


    mySubject.subscribe(data => {
      this.sb2 = data;
    })

    mySubject.next(20);
  }
}

// observable only emits the data when there is a subscriber.
// subject emits the data even if there is no subscriber.

// Observable is unicast
// Subject is multicast