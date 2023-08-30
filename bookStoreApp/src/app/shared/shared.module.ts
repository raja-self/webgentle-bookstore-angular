import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppRoutingModule } from '../app-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { BooksRoutingModule } from '../books/books-routing.module';


@NgModule({
  declarations: [
    NotfoundComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,

    BooksRoutingModule,
    MaterialModule,

  ],
  exports:[ToolbarComponent, FooterComponent,MaterialModule]
})
export class SharedModule { }
