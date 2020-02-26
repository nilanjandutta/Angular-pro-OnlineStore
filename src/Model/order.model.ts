import { Cart } from "src/app/store/cart.model";
import { Injectable } from '@angular/core';

@Injectable()
export class Order
{
    public id : number;
    public name : string;
    public address : string;
    public city : string;
    public state : string;
    public zip : number;
    public country : string;
    public shipped: boolean= false;

    constructor(public cart : Cart)
    {

    }

    clear()
    {
        this.id = null;
        this.name = this.address = this.city = this.country = null;
        this.state = this.zip = null;
        this.shipped= false;

        this.cart.clear();


    }
}
