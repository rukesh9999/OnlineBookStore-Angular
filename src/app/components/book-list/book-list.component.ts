import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books:Book[]=[];

  constructor(private _bookservice:BookService) { }

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks()
  {
    this._bookservice.getBooks().subscribe(
      data => this.books=data
    )
  }

}
