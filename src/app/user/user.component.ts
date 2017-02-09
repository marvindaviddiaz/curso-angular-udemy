import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <a [routerLink]="['../']">Home</a>
    `
})
export class UserComponent {
}