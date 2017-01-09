import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtroComponent } from './otro/otro.component';
import { InterpolationComponent } from './bindings/interpolation.component';
import { PropertyBindingComponent } from './bindings/property-binding.component';
import { CustomPropertiesComponent } from './bindings/custom-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    OtroComponent,
    InterpolationComponent,
    PropertyBindingComponent,    
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
