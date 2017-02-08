import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtroComponent } from './otro/otro.component';
import { InterpolationComponent } from './bindings/interpolation.component';
import { PropertyBindingComponent } from './bindings/property-binding.component';
import { CustomPropertiesComponent } from './bindings/custom-properties.component';
import { EventBindingComponent } from './bindings/event-binding.component';
import { CustomEventsComponent } from './bindings/custom-events.component';
import { TwoWayBindingComponent } from './bindings/two-way-binding.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { ServiceComponent } from './services/service.component';
import { CmpAComponent } from './services/cmp-a.component';
import { CmpBComponent } from './services/cmp-b.component';
import { LogService } from './services/log.service'

@NgModule({
  declarations: [
    AppComponent,
    OtroComponent,
    InterpolationComponent,
    PropertyBindingComponent,    
    CustomPropertiesComponent, EventBindingComponent, CustomEventsComponent, TwoWayBindingComponent, LifeCycleComponent, DirectivesComponent, HighlightDirective, UnlessDirective, ServiceComponent, CmpAComponent, CmpBComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
