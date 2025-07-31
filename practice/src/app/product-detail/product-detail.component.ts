import { Component, OnInit } from '@angular/core';
import { RouteIdService } from '../services/router-id/route-id.service';
import { ActivatedRoute } from '@angular/router';

interface user{
  id:number,
  name:string
}
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  user : user[] = [];
  productId:number=0;
  currUser : user[] = [];
  constructor(private service:RouteIdService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.user = this.service.product;
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    this.currUser = this.user.filter(item => item.id == this.productId);
    console.log(this.currUser);
  }
}
