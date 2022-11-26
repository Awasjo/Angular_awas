import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Book } from "./book.model";
import { Order } from "./order.model";

const PROTOCOL = 'http';
const PORT = 3500;
@Injectable()
export class RestDataSource
{
    baseUrl: string;

    constructor(private http: HttpClient)
    {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    getBooks(): Observable<Book[]>
    {
        // console.log('Reading Dummy data');
        return this.http.get<Book[]>(this.baseUrl + 'bookList');
    }

    saveOrder(order: Order): Observable<Order> 
    {
        console.log(JSON.stringify(order));
        return this.http.post<Order>(this.baseUrl + 'orders', order);
    }
}