import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-properties',
  template: 
  	`	
  		<h3>Custom Properties</h3>

  		<p>{{ result }}</p>
  		<input [value]="result" type="text" >
  	`,
  styles: []
})
export class CustomPropertiesComponent  {

	@Input() result:number = 0;

}
