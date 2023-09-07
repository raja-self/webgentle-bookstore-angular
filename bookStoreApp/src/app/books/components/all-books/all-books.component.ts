import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  private _pageTitle :string;

  public set PageTitle(value:string)
  {
    this._pageTitle = value;
  }
  public get PageTitle()
  {
    return this._pageTitle;
  }

  public books:BookModel[]=[];
  constructor(public bookService:BookService, public _counterService:CounterService)
  {


  }
  ngOnInit(): void {
   // this.books = this.bookService.getBooks();
   const allbooks = this.bookService.getBooks();
   this.PageTitle ="All Books";
   allbooks.forEach((b:any) => {
    var obj= new BookModel();
    obj.id= b.id;
    obj.title=b.title;
    obj.Author=b.author;
    obj.totalPages=b.totalPages;
    obj.price = b.price;
    // obj.price.value = b.price.value;
    // obj.price.currency = b.price.currency;

    this.books.push(obj);
   });



    console.log(allbooks)
  }
  Increase():void{
    this._counterService.IncreaseCounter();
  }
  Decrease():void{
    this._counterService.DecreaseCounter();

  }
}
