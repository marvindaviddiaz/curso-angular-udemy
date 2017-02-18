import { HttpFirebaseService } from './http-firebase.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: []
})
export class HttpComponent {

  items: any[] = [];
  asyncString = this.service.getData();

  constructor(private service: HttpFirebaseService) { }

  onSubmit(username: string, email: string) {
    this.service.sendData({ username: username, email: email })
      .subscribe(
      data => console.log(data),
      error => console.log(error)
      );
  }

  onGetData() {
    this.service.getOwnData().subscribe(
      data => {
        const myArray = [];
        for (let key in data) {
          myArray.push(data[key]);
        }
        this.items = myArray;
      }
    );

  }

}
