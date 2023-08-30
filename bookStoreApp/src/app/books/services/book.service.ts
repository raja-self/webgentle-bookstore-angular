import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
 "providedIn":"root"
})
export class BookService {

  constructor() { }
  public getBooks():BookModel[]{
   return [{
      "id":1,
      "title":"java",
      "totalPages":400,
      "author":"Rajasekhar",
      "price":{
        "currency":"INR",
        "value": 300
      }
   },
   {
   "id":2,
   "title":"Dotnet",
   "totalPages":500,
   "author":"Simha",
   "price":{
     "currency":"INR",
     "value": 300
   }
  },
  {
    "id":3,
    "title":"Vc++",
    "totalPages":500,
    "author":"Raja",
    "price":{
      "currency":"INR",
      "value": 300
  }
  },
   {
    "id":4,
    "title":"xmarine++",
    "totalPages":500,
    "author":"Raja",
    "price":{
      "currency":"INR",
      "value": 300
   }
  }


  ]
  }
}
