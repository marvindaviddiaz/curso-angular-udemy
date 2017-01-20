import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  template: `<h3>LifeCycle (check your console)</h3>
             <p #bindingParrafo>Este es un binding</p>
             <p>{{bindingParrafo.textContent}}</p>
              `,
  styles: []
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  //@ContentChild // Se usa cuando se hace un binding de un contenedor

  @ViewChild('bindingParrafo')
  bindingParrafo: HTMLElement;

  constructor() {
  }

  /**
   * La aparicion de algunos logs dependen, de que la aplicacion este en development mode.
   * La fase 'OnDestroy' se ejecuta cuando el componente se quita de la pantalla,
   * es decir que se navegue hacia otro, o se oculte con una bandera.
   */

  ngOnInit() {
    this.log('COMPONENT LIFE-CYCLE: It is in execution: 1. OnInit');
  }

  ngOnChanges() {
    this.log('COMPONENT LIFE-CYCLE: It is in execution: 2. OnChanges');
  }

  ngDoCheck() {
    this.log('COMPONENT LIFE-CYCLE: It is in execution: 3. DoCheck');
  }

  ngAfterContentInit() {
    this.log('COMPONENT LIFE-CYCLE: It is in execution: 4. AfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('COMPONENT LIFE-CYCLE: It is in execution: 5. AfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('COMPONENT LIFE-CYCLE: It is in execution: 6. AfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('COMPONENT LIFE-CYCLE: It is in execution: 7. AfterViewChecked');

    console.log('Binding:');
    console.log(this.bindingParrafo);

  }

  ngOnDestroy() {
    this.log('COMPONENT LIFE-CYCLE: It is in execution: 8. OnDestroy');
  }

  log(hook: string) {
    console.log(hook);
  }


}
