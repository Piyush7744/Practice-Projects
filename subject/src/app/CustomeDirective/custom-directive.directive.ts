import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit {
  // whoever element use this custome directive for that we are using ElementRef
  // so basically a reference of that element will be created...(concept of dependency injection)
  // that element will be injected here.
  constructor(private element: ElementRef , private renderer : Renderer2) { }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = 'red';
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','red');
  }
}
