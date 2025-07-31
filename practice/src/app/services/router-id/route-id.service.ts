import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RouteIdService {
  product = [
    {
      "id": 1,
      "name": "Piyush"
    },
    {
      "id": 2,
      "name": "Tanmay"
    },
    {
      "id": 3,
      "name": "Amaan"
    },
    {
      "id": 4,
      "name": "Mayank"
    }
  ]
  constructor() {

   }
}
