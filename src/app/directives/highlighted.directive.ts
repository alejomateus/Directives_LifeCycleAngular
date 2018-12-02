import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor(private el: ElementRef) { 
  }
  @Input("appHighlighted") newColor:string;

  @HostListener('mouseenter') mouseEnter(){
    this.resalt(this.newColor)
  }
  @HostListener('mouseleave') mouseLeave(){
    this.resalt(null)
  }
  private resalt(color:string="yellow"){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
