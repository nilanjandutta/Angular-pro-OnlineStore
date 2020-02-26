import { Product } from './../../Model/product.model';
import { Injectable } from "@angular/core";

//cart
//attributes- an array, ItemCount(quantity),Price

//Why am i using Service?
//using dependency injection, 
//end user will always have one instance of cart while he is
//mmoving through different categories
@Injectable()
export class Cart
{
    //Attributes
    public Lines : CartLine[] = [];
    public itemCount : number = 0;
    public cartprice : number = 0;

    //Method for this class
    addLine(product : Product, quantity : number=1)
    {
        let line = this.Lines.find(line => line.product.id == product.id);
        if(line != undefined)
        {
            line.quantity += quantity;
        }
        else
        {
            this.Lines.push(new CartLine(product, quantity));
        }
        // call the method re-calculate
        this.recalculate();

    }
    //update
    updateQuantity(product : Product, quantity : number)
    {
        let line = this.Lines.find(line => product.id == product.id);
        if(line != undefined)
        {
            line.quantity = Number(quantity);
        }
        //recalc()
        this.recalculate();
    }
    //remove
    removeLine(id: number)
    {
        let index = this.Lines.findIndex(line => line.product.id == id);
        this.Lines.splice(index,1);

        this.recalculate()

    }
    //clear
    clear()
    {
        this.Lines = [];
        this.itemCount = 0;
        this.cartprice = 0;
    }
    //Recal (complicated one )
    //Calculate product quantity * product price
    //count, price 
    //looping (how many products will purchase)
    //product A * 20 , Product b * 5, Product c * 14 * 3 items
    //ForEach
    //user 1 have his total cost private
    //like same to user 2

    private recalculate()
    {
        this.itemCount = 0;
        this.cartprice = 0;

        this.Lines.forEach(l =>
            {
                this.itemCount += l.quantity;
                this.cartprice += (l.quantity * l.product.price);
            })
    }

}

export class CartLine
{
    constructor(public product : Product, public quantity : number )
    {

    }
    get lineTotal()
    {
        return this.quantity * this.product.price;
    }
}

//CRUD Add, update, remove, clear,  recall

//adding an item in the cart

