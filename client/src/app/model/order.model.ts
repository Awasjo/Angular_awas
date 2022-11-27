import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order
{
    public _id?: number;
    public name?: string;
    public address?: string;
    public city?: string;
    public country?: string;
    public province?: string;
    public postalCode?: string;
    public shipped: boolean = false;

    constructor(public cart: Cart){}

    clear(): void
    {
        this._id = null!;
        this.name = null!;
        this.address = null!;
        this.city = null!;
        this.country = null!;
        this.province = null!;
        this.postalCode = null!;
        this.cart.clear();
    }
}