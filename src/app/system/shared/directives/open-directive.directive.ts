import {Directive, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[haOpenDirective]'
})
export class OpenDirectiveDirective implements OnInit {
  @HostBinding('class.open') isOpen = false;

  ngOnInit(): void {
  }

  constructor() {
  }

  @HostListener('click')
  onClick() {
    this.isOpen = !this.isOpen;
  }
}
