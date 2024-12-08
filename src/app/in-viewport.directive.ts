import { Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appInViewport]'
})
export class InViewportDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  @HostBinding('class.visible') isVisible = false; // Add this class when element is visible

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(([entry]) => {
      this.isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
