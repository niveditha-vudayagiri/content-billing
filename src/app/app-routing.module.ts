import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BillComponent } from './components/bill/bill.component';
const routes : Routes = [
  {
    path: 'client',
    component: ClientComponent
  },
  {
    path: 'bill',
    component: BillComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
