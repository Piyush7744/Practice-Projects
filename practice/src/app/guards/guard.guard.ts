import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core'
// import { session } from '../utils/session'

export const guardGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router:Router = inject(Router);
//  here based on the condition that user is logged in or not we can return value
  // if(){

  // }else{

  // }

  return true;
};
