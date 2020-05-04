import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books:Book[]=[
    // {
    //  sku:"text-100",
    //  name:"c-language",
    //  description:"c is prog lang",
    //  unit_price:1220,
    //  img_Url:"localhost://8080",
    //  active:true,
    //  units_in_stock:235,
    //  date_created:new Date(),
    //  last_updated:new Date(),
    // },
    // {
    //  sku:"text-100",
    //  name:"java-language",
    //  description:"Java is prog lang",
    //  unit_price:1220,
    //  img_Url:"localhost://8080",
    //  active:true,
    //  units_in_stock:735,
    //  date_created:new Date(),
    //  last_updated:new Date(),
    // }
  ]

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
