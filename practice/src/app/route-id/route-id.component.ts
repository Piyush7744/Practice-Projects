import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteIdService } from '../services/router-id/route-id.service';


interface user {
  id: number,
  name: string
}
@Component({
  selector: 'app-route-id',
  templateUrl: './route-id.component.html',
  styleUrls: ['./route-id.component.css']
})
export class RouteIDComponent {
  user: user[] = []
  constructor(private router: Router, private service: RouteIdService) { }


  ngOnInit(): void {
    this.user = this.service.product;
    console.log(this.user);
  }
  clickk(id:number) {
    this.router.navigate([`user/${id}`])
  }
}
