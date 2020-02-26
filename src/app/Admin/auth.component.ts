import { AuthService } from './../../Model/auth.service';
import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
    templateUrl: "auth.component.html"

})

export class AuthComponent
{
    //atributes fot the authentication class 
    // i.e username, passowrd

    public username : string;
    public password : string;
    public errorMessage : string;

    constructor(private router : Router, private auth : AuthService)
    {


    }

    authenticate(form: NgForm)
    {
        if(form.valid)
        {
            this.auth.authenticate(this.username , this.password)
                .subscribe(response => {
                    if(response)
                    {
                        this.router.navigateByUrl("/Admin/admin");
                    }
                    this.errorMessage = "Authentication Failed";
                })
            //perform the authentication
            

        }
        else
        {
            this.errorMessage= "Invalid Credentials"
        }
    }

    

}