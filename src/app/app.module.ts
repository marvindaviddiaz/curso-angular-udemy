import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtroComponent } from './otro/otro.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { CustomPropertiesComponent } from './custom-properties/custom-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    OtroComponent,
    InterpolationComponent,
    CustomPropertiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
