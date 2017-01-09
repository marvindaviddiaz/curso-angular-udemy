import { Component} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <h3>Event Binding</h3>

    <button (click)="eventoClick()" >Click me! </button>
  `,
  styles: []
})
export class EventBindingComponent {

  eventoClick(){
    alert('Has hecho click');
  }
}
