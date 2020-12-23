import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) { }

  canActivate(){
    if(this.authenticationService.isLogged()) return true;

    this.router.navigate(['/signup']);
    return false;
  }
}
