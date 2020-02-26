import { AuthService } from './../../Model/auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable()

export class AuthGaurd
{
    constructor(private route : Router, private auth : AuthService)
    {

    }

    canActivate(route : ActivatedRouteSnapshot, 
            state : RouterStateSnapshot) : boolean
            {
                if(this.auth.autenticated)
                {
                    this.route.navigateByUrl("/Admin/auth");
                    return false;
                }
                return true;
            }
}