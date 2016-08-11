import { Component } from 'angular2/core';
import { AddNewGroceryStore } from './add-new-grocery-store.component';

@Component({
  selector: 'my-app',
  directives: [AddNewGroceryStore],
  template: `
    <add-new-grocery-store></add-new-grocery-store>
  `
})

export class AppComponent {

}
