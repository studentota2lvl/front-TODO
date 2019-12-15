import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {
    path: '',
    component: TodolistComponent,
  },
  {
    path: 'item/:itemID',
    component: ItemComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
