import { Component, EventEmitter } from 'angular2/core';
import { GroceryStore } from './grocery-store.model';
import { AddNewGroceryStore } from './add-new-grocery-store.component';

@Component({
  selector: 'grocery-store-list',
  directives: [AddNewGroceryStore],
  template: `
    <div class="list-group">
      <h5 class="list-group-item-heading" *ngFor="#store of groceryStoreList">{{ store.name }}</h5>
    </div>
    <add-new-grocery-store (onAddNewGroceryStore)="addNewGroceryStore($event)"></add-new-grocery-store>
  `
})
export class GroceryStoreListComponent {
  public groceryStoreList: GroceryStore[] = [];
  addNewGroceryStore(name: string): void {
  this.groceryStoreList.push(
    new GroceryStore(name)
    );
  console.log(this.groceryStoreList)
  }
}
