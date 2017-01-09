import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom-events',
  template: 
  `
<h3>Custom Events</h3>

<button (click)="metodoClick()">Click Custom</button>

  `,
  styles: []
})
export class CustomEventsComponent {

	@Output() presionado = new EventEmitter<string>();

	metodoClick(){
		this.presionado.emit('Esto se envio del component custom-events!');
	}

}
