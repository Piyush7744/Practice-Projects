import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  date = ''
  call() {
    console.log("After submit");
    console.log(this.date)
  }
}
