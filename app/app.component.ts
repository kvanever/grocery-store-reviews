import { Component } from 'angular2/core';
import { GroceryStore } from './grocery-store.model';
import { AddNewGroceryStore } from './add-new-grocery-store.component';
import { GroceryStoreListComponent } from './grocery-store-list.component';

@Component({
  selector: 'my-app',
  directives: [AddNewGroceryStore, GroceryStoreListComponent],
  template: `
    <grocery-store-list></grocery-store-list>
  `
})

export class AppComponent {
  public groceryStores: GroceryStore[];
  constructor(){

  }
}
