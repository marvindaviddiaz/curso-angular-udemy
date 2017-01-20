import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Curso de Angular Udemy!';

  //Viene de Custom Events
  methodInAppComponent(recibido:string){
  	alert(recibido);
  }
}
