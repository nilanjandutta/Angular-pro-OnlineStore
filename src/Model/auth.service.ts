import { Observable } from 'rxjs';
import { Injectable} from "@angular/core";
import { RestDataSource } from './rest.datasource';


@Injectable()

export class AuthService
{
    constructor(private datasource : RestDataSource)
    {

    }

    //3methods
    //1. authenticate method to receive admin credential
    authenticate(username : string, password : string): Observable<boolean>
    {
        return this.datasource.authenticate(username,password);
    }
    //2.Authenticate property read only 

    get autenticated() : boolean{
        return this.datasource.auth_token != null;
    }
    //3.Clear , remove the token from datasource

    clear()
    {
        this.datasource.auth_token = null;
    }
}
