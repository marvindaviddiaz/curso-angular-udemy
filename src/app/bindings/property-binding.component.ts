import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: 
  `

    <h3>Property Binding</h3>

    <input [value]="result" type="text" >

    <p [ngClass]="{redBorder: true}" >Is this styled?</p>

    <p [ngStyle]="{color: 'blue'}" >Is this styled?</p>
  
  `,
  styles: [
  `
    .redBorder{
      border: 1px solid red;
    }

  `]
})
export class PropertyBindingComponent  {

  result:string = 'Valor de una variable';


}
