import { Component, EventEmitter } from 'angular2/core';
import { GroceryStore } from './grocery-store.model';
import { AddNewGroceryStore } from './add-new-grocery-store.component';

@Component({
  selector: 'grocery-store-list',
  directives: [AddNewGroceryStore],
  template: `
    <add-new-grocery-store (onAddNewGroceryStore)="addNewGroceryStore($event)"></add-new-grocery-store>
    <div class="list-group">
      <h4 class="list-group-item-heading" *ngFor="#store of groceryStoreList">{{ store.name }}</h4>
    </div>
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
