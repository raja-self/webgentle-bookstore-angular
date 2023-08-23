import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


const routes:Routes =[

  {path:"login", component:LoginComponent},
     {path:"signup", component:SignupComponent}
  // path:"auth", component:AuthComponent, children: [
  //   {path:"login", component:LoginComponent},
  //   {path:"signup", component:SignupComponent}
  //]
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
export class AuthRoutingModule { }
