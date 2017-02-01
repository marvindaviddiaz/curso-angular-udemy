import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from './highlight.directive'

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles:[`.border{
        border: 3px solid blue;
    }
    .background{
      background-color: green;
    }
    div{
      width: 100px;
      height: 100px;
    }
  `]
})
export class DirectivesComponent implements OnInit {
  
  private switch = true;
  
  private items = [1,2,3,4,5];
  
  onSwitch(){
    this.switch = !this.switch;
  }
  
  
  constructor() { }

  ngOnInit() {
  }

}
