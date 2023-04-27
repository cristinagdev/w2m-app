import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { last } from 'rxjs';

@Directive({
  selector: '[uppercaseDirective]',
})
export class UppercaseDirective implements OnInit {
  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elemRef.nativeElement,
      'text-transform',
      'uppercase'
    );
  }

  @HostListener('input')
  onInput() {
    const initValue = this.elemRef.nativeElement.value;

    this.elemRef.nativeElement.value = initValue.toUpperCase();
  }
}
