import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <h3>Two Way Binding</h3>
    <input type="text" [(ngModel)]="person.name" />
    <input type="text" [(ngModel)]="person.name" />
  `,
  styles: []
})
export class TwoWayBindingComponent {

  person = {
    name: "Marvin",
    age: 26
  }

}
