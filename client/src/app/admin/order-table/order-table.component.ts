import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';

@Component({
  templateUrl: './order-table.component.html',
})
export class OrderTableComponent implements OnInit {
  includeShipped: boolean = false;

  constructor(private repository: OrderRepository) { }

  ngOnInit(): void {
  }

  getOrders():Order[]
  {
    return this.repository.getOrders().filter(o => this.includeShipped || o.shipped);
  }

  markShipped(order: Order): void {
  order.shipped = (order.shipped) ? false : true;
  this.repository.updateOrder(order);
  }

  delete(id: number): void {
  this.repository.deleteOrder(id)
  }
}
