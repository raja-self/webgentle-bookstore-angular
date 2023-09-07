import { PriceModel } from "./price.model";

export class BookModel{
  id:number;
  title:string;
  totalPages:number;
  private _author:string;
  price:PriceModel;

  public  set Author(value:string)
  {
    this._author= 'author -'+ value;
  }
  public get Author()
  {
    return this._author;
  }
}
