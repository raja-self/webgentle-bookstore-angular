import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 public name:string ='';
 public email:string ='';
 constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      this.name=params['name'];
      this.email=params['email'];
    });



  }
  gotoSignup():void{
    this.router.navigate(['/auth/signup'])
  }
  gotoBookDetails(bookId:number, authorId:number):void{
    //with routing parameters - hardcoded
   // this.router.navigate(['/public/book-details/', 100, 'author', 130])

    //Routing parameters
    //this.router.navigate(['/public/book-details/', bookId, 'author', authorId])

    //Routing parameters and querystring parameters
    this.router.navigate(['/public/book-details/', bookId, 'author', authorId],{queryParams:{name:"raja", email:"rajasekhar@gmail.com"}})
  }
}
