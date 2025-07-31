import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteIDComponent } from './route-id/route-id.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { guardGuard } from './guards/guard.guard';

const routes: Routes = [
  { path: "user", component: RouteIDComponent },
  { path: "user/:id", component: ProductDetailComponent ,canActivate:[guardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
