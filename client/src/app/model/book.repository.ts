import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { RestDataSource } from './rest.datasource';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class BookRepository {
  private books: Book[] = [];
  private authors: string[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getBooks().subscribe((data) => {
      this.books = data;
      // console.log(this.books);
      this.authors = data.map((b) => b.author!).filter((a, index, array) => array.indexOf(a) === index).sort();
    });
  }

  getBooks(author: string = null!): Book[] {
    return this.books.filter(b => author == null || author === b.author);
  }

  getBook(id: number): Book {
    return this.books.find((b) => b._id === id)!;
  }
  getAuthors(): string[] {
    return this.authors;
  }
}
