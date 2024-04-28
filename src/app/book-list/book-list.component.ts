import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from '../store/book.actions';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$ : Observable<Book[]> | undefined

  constructor(private store : Store<AppState>){

  }

  ngOnInit(): void {
    this.books$ = this.store.pipe(select('book'));
  }

  addBook(id : string, title : string, author : string){
    this.store.dispatch(AddBook({id, title , author}));
  }

  removeBook(id : string){
    this.store.dispatch(RemoveBook({ bookId : id}))
  }

}
