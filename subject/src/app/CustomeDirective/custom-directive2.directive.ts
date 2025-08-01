import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomDirective2]'
})
export class CustomDirective2Directive implements OnInit{

  constructor(private element : ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.color = 'white'
  }

}
