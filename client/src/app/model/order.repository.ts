import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "./order.model";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class OrderRepository
{
    private orders : Order[] = [];
    private loaded = false;

    constructor(private dataSource: RestDataSource) {}

    loadOrders(): void{
        this.loaded = true;
        this.dataSource.getOrders().subscribe(orders => this.orders = orders);
    }

    getOrders(): Order[]
    {
        if(!this.loaded){
            this.loadOrders();
        }
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
    }

    updateOrder(updatedOrder: Order): void{
        this.dataSource.updateOrder(updatedOrder).subscribe((order: Order) => {
            this.orders.splice(this.orders.findIndex(p => order._id === order._id), 1, order);
        });
    }

    deleteOrder(id:number):void {
    this.dataSource.deleteOrder(id).subscribe(order =>{
        this.orders.splice(this.orders.findIndex(o => id === o._id), 1);
    });
    }

}