import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  
  @Input() defaultColor = 'white';
  @Input() highlightColor = 'green';
  
  private colorFondo: string;
  
  @HostListener('mouseenter') mouseEncima(){
    this.colorFondo = this.highlightColor;
  };
  @HostListener('mouseleave') mouseFuera(){
    this.colorFondo = this.defaultColor;
  };
  
  @HostBinding('style.backgroundColor') get setColor(){
    return this.colorFondo;
  }
  
  ngOnInit(){
    this.colorFondo = this.defaultColor;
  }
  
  constructor() {
  
  }

}
