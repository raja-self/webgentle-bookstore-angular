import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

 public bookId:number = 1;
  public authorId: number = 1;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.firstChild?.params.subscribe((params)=>{
      console.log(params)
        this.bookId = params['id'];
        this.authorId = params['authorId'];
    });
  }

}
