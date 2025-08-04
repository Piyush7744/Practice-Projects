import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-and-from',
  templateUrl: './of-and-from.component.html',
  styleUrls: ['./of-and-from.component.css']
})
export class OfAndFromComponent {
  array1 = [1, 3, 5, 7, 9];
  array2 = ['Piyush', 'Tanmay', 'Amaan', 'Mayank'];

  // myObservable = of(this.array1, this.array2,"Hello from of");
  myObservable = from(this.array1)
  data: any[] = [];
  getAsyncData() {
    this.myObservable.subscribe({
      next: (val: any) => {
        console.log(val);
        this.data.push(val);
        console.log(this.data)
      },
      error:(err)=>{
        console.error(err);
      },
      complete:()=>{
        alert("Data stream fetched successfully");
      }
    })
  }

}
