import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-properties',
  template: 
  	`
  		<p>{{ result }}</p>
  		<input [value]="result" type="text" >
  	`,
  styles: []
})
export class CustomPropertiesComponent  {

	@Input() result:number = 0;

}
