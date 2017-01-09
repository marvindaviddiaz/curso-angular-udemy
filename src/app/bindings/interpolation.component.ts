  import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: 
  `	
  <h3>Interpolation</h3>
  <p>
  	{{stringInterpolation}}
  </p>
  `,
  styles: []
})
export class InterpolationComponent {

	stringInterpolation:string = 'Valor de una variable';

}
