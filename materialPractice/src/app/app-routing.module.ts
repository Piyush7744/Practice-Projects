import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

const routes: Routes = [
  { path: "card", component: CardComponent },
  {path:"date",component:DatePickerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }