import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';
import { TestService } from './test.service';

 @Injectable(
  //{
//   // providedIn: 'root'
//   providedIn: 'any'
// }
)
export class Counter2Service  {
public  counter:number =0;
  constructor() {}

   IncreaseCounter():void
  {
    this.counter += 2;
  }
   DecreaseCounter():void
  {
    this.counter -= 2;
  }

}
