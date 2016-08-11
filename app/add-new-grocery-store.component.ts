import { Component, EventEmitter } from 'angular2/core';
import { GroceryStore } from './grocery-store.model';

@Component({
  selector: 'add-new-grocery-store',
  outputs: ['onAddNewGroceryStore'],
  template: `
    <form>
      <div class="form-group grocery-store-input">
        <label>Enter the name of a grocery store</label>
        <input type="text" placeholder="Please enter a grocery store name" class="col-sm-8 input-lg form-control" #newName>
      </div>
      <button (click)="addNewGroceryStore(newName)" class="btn btn-success">Add new store</button>
    </form>
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
