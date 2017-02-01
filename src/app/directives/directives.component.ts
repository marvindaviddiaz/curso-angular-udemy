import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
