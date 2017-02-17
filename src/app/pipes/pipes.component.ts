import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: []
})
export class PipesComponent implements OnInit {

  myValue = 'lowercase';
  myDate = new Date(2016, 5, 24);
  values = ['Milk', 'Bread', 'Beans'];
  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data is here!'), 2000);
  });

  constructor() { }

  ngOnInit() {
  }

}
