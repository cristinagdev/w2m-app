import { AfterContentInit, AfterViewChecked, AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[uppercaseDirective]'
})
export class UppercaseDirective implements OnInit {


  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.elemRef.nativeElement,'text-transform', 'uppercase' )

  }


  @HostListener('input')
  onInput(){
    this.renderer.setStyle(this.elemRef.nativeElement,'text-transform', 'uppercase' )
  }

}
