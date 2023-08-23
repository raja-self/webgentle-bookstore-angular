import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
 public id:number=0;
 public authorId:number=0;
 public name:string = '';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) =>{
      this.id =params['id'];
      this.authorId=params['authorId']
    });
    this.route.queryParams.subscribe((params)=>{
        this.name = params['name'];
    })
  }

}
