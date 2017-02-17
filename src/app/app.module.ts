import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
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
import { LogService } from './services/log.service';
import { HomeComponent } from './home-component.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserDetailGuard } from './user/user-detail.guard';
import { UserEditComponent } from './user/user-edit.component';
import { UserEditGuard } from './user/user-edit.guard';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { PipesComponent } from './pipes/pipes.component';
import { DoublePipe } from './pipes/double.pipe';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    OtroComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    CustomPropertiesComponent,
    EventBindingComponent,
    CustomEventsComponent,
    TwoWayBindingComponent,
    LifeCycleComponent,
    DirectivesComponent,
    HighlightDirective,
    UnlessDirective,
    ServiceComponent,
    CmpAComponent,
    CmpBComponent,
    HomeComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    DataDrivenComponent,
    TemplateDrivenComponent,
    PipesComponent,
    DoublePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [LogService, UserDetailGuard, UserEditGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
