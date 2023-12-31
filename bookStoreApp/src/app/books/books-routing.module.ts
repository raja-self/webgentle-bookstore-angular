import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { SharedModule } from '../shared/shared.module';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';

const routes:Routes = [

  {path:'', component:AllBooksComponent},
  {path:'recent',component:RecentBooksComponent},

  {path:':id',component:BookDetailsComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports:[
    RouterModule
  ]
})
export class BooksRoutingModule { }
