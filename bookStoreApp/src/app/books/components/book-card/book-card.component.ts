import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
@Input()
  public _books:BookModel[];

 public  get books()
  {
    return this._books;
  }
 public set books(value : BookModel[])
  {
    value.map(x=> x.title = "Title "+x.title)
    this._books = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
