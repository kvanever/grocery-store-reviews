import { Component, EventEmitter } from 'angular2/core';
import { GroceryStore } from './grocery-store.model';

@Component({
  selector: 'add-new-grocery-store',
  outputs: ['onAddNewGroceryStore'],
  template: `
    <div class="grocery-store-input">
      <label>Enter the name of a grocery store</label>
      <input placeholder="Please enter a grocery store name" class="col-sm-8 input-lg" #newName>
      <button (click)="addNewGroceryStore(newName)" class="btn-success btn-lg add-button">Add new store</button>
    </div>
  `
})
export class AddNewGroceryStore {
  public onAddNewGroceryStore: EventEmitter<String>;
  constructor(){
    this.onAddNewGroceryStore = new EventEmitter();
  }
  addNewGroceryStore(name: HTMLInputElement){
    console.log(name.value)
    this.onAddNewGroceryStore.emit(name.value);
    name.value="";
  }
}
