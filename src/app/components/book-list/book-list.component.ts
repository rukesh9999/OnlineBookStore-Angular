import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books:Book[]=[];
  currentCategoryId:number;
  searchMode:boolean;
  constructor(private _bookservice:BookService,private _activateRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this._activateRoute.paramMap.subscribe(()=>{    this.listBooks();    });

  }

  listBooks()
  {
     this.searchMode = this._activateRoute.snapshot.paramMap.has('keyword');
     if(this.searchMode)
     {
      //call search books
      this.handleSearchBooks();
     }
     else{
       this.handleListBooks();
     }
  }


  handleListBooks()
  {
   const hasCategoryId:boolean = this._activateRoute.snapshot.paramMap.has('id');
   if(hasCategoryId)
   {
     this.currentCategoryId = +this._activateRoute.snapshot.paramMap.get('id');
   }
   else{
     this.currentCategoryId=1;
   }
    this._bookservice.getBooks(this.currentCategoryId).subscribe(
      data => this.books=data
    )

  }

  handleSearchBooks()
  {
    const keyword:string = this._activateRoute.snapshot.paramMap.get('keyword');
    this._bookservice.searchBooks(keyword).subscribe(data=>{this.books=data});
  }

}
