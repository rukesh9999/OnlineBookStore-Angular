import { Component, OnInit } from '@angular/core';
import { BookCategory } from 'src/app/common/book-category';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {

  bookcategories:BookCategory[]=[];
  constructor(private _bookservice:BookService) { }

  ngOnInit(): void {
    this.listBookCategories();
  }


  listBookCategories()
  {
      this._bookservice.getBookcategories().subscribe(
      data => this.bookcategories=data
     );

  }

}
