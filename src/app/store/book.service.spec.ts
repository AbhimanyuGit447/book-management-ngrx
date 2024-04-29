import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('bookService', () => {
  let service : BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to add user', () => {
    service.addBook({id : '1', title : 'a', author : 'abhi'}).subscribe(data => {
      expect(data.title).withContext('a');
    })
  });

})
