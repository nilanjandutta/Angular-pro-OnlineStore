import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Order } from './order.model';
import { Cart } from 'src/app/store/cart.model';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

const PROTOCOL = "http";
const PORT = 4202;


@Injectable()
export class RestDataSource
{
    baseUrl : string;
    auth_token : string;

    constructor(private http : HttpClient)
    {
        this.baseUrl = 
        `${PROTOCOL}://${location.hostname}:${PORT}/`;

    }

    getProduct() : Observable<Product[]>
    {
        return this.http.get<Product[]>(this.baseUrl + "products");
    }

    saveOrder(order : Order) : Observable<Order>
    {
        return this.http.post<Order> (this.baseUrl + "orders", order);
    }

    authenticate(user : string, pass : string) : Observable<boolean>
    {
        return this.http.post<any> (this.baseUrl + "login",
        {
            name : user,
            password : pass
        }).pipe(map(response =>
            {
                this.auth_token = response.success ?
                response.token : null;
                
                return response.success;
            }));
    }
}