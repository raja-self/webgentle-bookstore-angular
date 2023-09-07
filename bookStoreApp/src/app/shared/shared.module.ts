import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
//import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BooksRoutingModule } from '../books/books-routing.module';
import { RouterModule } from '@angular/router';
import { AuthorsComponent } from './components/authors/authors.component';


@NgModule({
  declarations: [
    NotfoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    //BooksRoutingModule,
    MaterialModule

  ],
  exports:[ToolbarComponent, FooterComponent,MaterialModule, AuthorsComponent]
})
export class SharedModule { }
