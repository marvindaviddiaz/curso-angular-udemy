import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  
  private colorFondo = 'white';
  
  @HostListener('mouseenter') mouseEncima(){
    this.colorFondo = 'green';
  };
  @HostListener('mouseleave') mouseFuera(){
    this.colorFondo = 'white';
  };
  
  @HostBinding('style.backgroundColor') get setColor(){
    return this.colorFondo;
  }
  
  constructor() {
//    this.elementRef.nativeElement.style.backgroundColor = 'green';
//    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
//    La primera linea no es muy compatible con ciertos navegadores
  }

}
