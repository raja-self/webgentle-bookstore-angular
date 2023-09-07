import { Injectable } from '@angular/core';

 @Injectable(
  //{
//   // providedIn: 'root'
//   providedIn: 'any'
// }
)
export class CounterService {
public counter:number =0;
  constructor() { }

  IncreaseCounter():void
  {
    this.counter ++;
  }
  DecreaseCounter():void
  {
    this.counter --;
  }

}
