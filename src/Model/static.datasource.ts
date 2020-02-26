import { Injectable } from "@angular/core";
import { Product } from './product.model';
import {  from, Observable} from "rxjs";
import { Order } from './order.model';

@Injectable() 
//injectable is a decorator which tells the class that this will used as a service
export class StaticDataSource{
    private products: Product[] = [
        new Product(1, "Flyroam Lace up show", "Category 1",  "Sneaker Shoe(Category 1)", 100),
        new Product(2, "Flyroam Lace up show", "Category 1", "Sneaker Shoe(Category 1)", 100),
        new Product(3, "Flyroam Lace up show", "Category 1",  "Sneaker Shoe(Category 1)", 100),
        new Product(4, "Flyroam Lace up show", "Category 1",  "Sneaker Shoe(Category 1)", 100),
        new Product(5, "Flyroam Lace up show", "Category 1",  "Sneaker Shoe(Category 1)", 100),
        new Product(6, "Flyroam Lace up show", "Category 2",  "Sneaker Shoe(Category 2)", 100),
        new Product(7, "Flyroam Lace up show", "Category 2", "Sneaker Shoe(Category 2)", 100),
        new Product(8, "Flyroam Lace up show", "Category 2",  "Sneaker Shoe(Category 2)", 100),
        new Product(9, "Flyroam Lace up show", "Category 2", "Sneaker Shoe(Category 2)", 100),
        new Product(10, "Flyroam Lace up show", "Category 2",  "Sneaker Shoe(Category 2)", 100),
        new Product(11, "Flyroam Lace up show", "Category 3",  "Sneaker Shoe(Category 2)", 100)
        
    ];

    getProduct(): Observable<Product[]>{
        return from([this.products])

    }

    //for saving the orders
    saveOrder(Order : Order) : Observable<Order>
    {
        console.log(JSON.stringify(Order));
        return from([Order]);
    }
}
