import { StaticDataSource } from './static.datasource';
import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class OrderRepository
{
    //any data should be private
    private order : Order[] = [];

    constructor(private datasource : StaticDataSource)
    {

    }

    //Data Source which have products 
    //order which will get prodyct from this DS

    getOrders() : Order[]
    {
        return this.order;
    }

    saveOrder(Order : Order) : Observable<Order>
    {
        return this.datasource.saveOrder(Order);
    }

}