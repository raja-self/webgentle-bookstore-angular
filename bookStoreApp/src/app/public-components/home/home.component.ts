import { publishFacade } from '@angular/compiler';
import { AfterViewInit, Component, Inject, OnInit, ViewChild, inject } from '@angular/core';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(AuthorsComponent) private childAuthor: AuthorsComponent
  public counterValue : number = 0;
  public parentValue: string = "Raja";
  constructor(public counterService:CounterService,
    @Inject('appTitle') public titleApp:any
    ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(
      () => {
        this.childAuthor.setData(100)
      }, 10
    )


  }
  IncreaseCounterValue() : void
  {
    this.counterService.IncreaseCounter();
  }
  DecreaseCounterValue():void
  {
     this.counterService.DecreaseCounter();
  }
}
