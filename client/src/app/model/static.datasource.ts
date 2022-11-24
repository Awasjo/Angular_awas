import { Injectable } from '@angular/core';
import { Book } from './book.model';
import {Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource
{
    private books: Book[] = 
    [
        new Book(1, ' Book 1', ' description 1', 10, 'Author 1', 'genre 1'),
        new Book(2, ' Book 2', ' description 2', 10, 'Author 1', 'genre 2'),
        new Book(3, ' Book 3', ' description 3', 10, 'Author 1', 'genre 3'),
        new Book(4, ' Book 4', ' description 4', 10, 'Author 1', 'genre 4'),
        new Book(5, ' Book 5', ' description 5', 10, 'Author 2', 'genre 5'),
        new Book(6, ' Book 6', ' description 6', 10, 'Author 2', 'genre 6'),
        new Book(7, ' Book 7', ' description 7', 10, 'Author 3', 'genre 7'),
        new Book(8, ' Book 8', ' description 8', 10, 'Author 4', 'genre 8'),
    ];
getBooks():Observable<Book[]>
{
    return from([this.books]);
}
}