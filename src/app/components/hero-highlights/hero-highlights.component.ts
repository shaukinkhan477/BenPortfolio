import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Benefit } from 'src/app/shared/models/benefit.model';
import { BenifitsOfMyServicesService } from 'src/app/shared/services/benifitsOfMyServices.service';

@Component({
  selector: 'app-hero-highlights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-highlights.component.html',
  styleUrl: './hero-highlights.component.css',
})
export class HeroHighlightsComponent implements OnInit, AfterViewInit {
  @ViewChild('sliderTrack') sliderTrack!: ElementRef;

  benefits: Benefit[] = [];
  isDragging = false;
  startPos = 0;
  currentTranslate = 0;
  prevTranslate = 0;
  animationID = 0;
  currentIndex = 0;

  constructor(
    private BenifitsOfMyServicesService: BenifitsOfMyServicesService
  ) {}

  ngOnInit() {
    this.BenifitsOfMyServicesService.getBenefits().subscribe((data) => {
      this.benefits = data;
    });
  }

  ngAfterViewInit() {
    this.addEventListeners();
  }

  addEventListeners() {
    const slider = this.sliderTrack.nativeElement;

    // Mouse events
    slider.addEventListener('mousedown', this.touchStart.bind(this));
    slider.addEventListener('mousemove', this.touchMove.bind(this));
    slider.addEventListener('mouseup', this.touchEnd.bind(this));
    slider.addEventListener('mouseleave', this.touchEnd.bind(this));

    // Touch events
    slider.addEventListener('touchstart', this.touchStart.bind(this));
    slider.addEventListener('touchmove', this.touchMove.bind(this));
    slider.addEventListener('touchend', this.touchEnd.bind(this));

    // Prevent context menu
    slider.addEventListener('contextmenu', (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    });
  }

  touchStart(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.startPos = this.getPositionX(event);
    this.animationID = requestAnimationFrame(this.animation.bind(this));
    this.sliderTrack.nativeElement.classList.add('active');
  }

  touchMove(event: MouseEvent | TouchEvent) {
    if (this.isDragging) {
      const currentPosition = this.getPositionX(event);
      this.currentTranslate =
        this.prevTranslate + currentPosition - this.startPos;
    }
  }

  touchEnd() {
    this.isDragging = false;
    cancelAnimationFrame(this.animationID);

    const movedBy = this.currentTranslate - this.prevTranslate;

    // Snap to next/prev slide if moved enough
    if (Math.abs(movedBy) > 100) {
      if (movedBy < 0) {
        this.currentIndex = Math.min(
          this.currentIndex + 1,
          this.benefits.length - 1
        );
      } else {
        this.currentIndex = Math.max(this.currentIndex - 1, 0);
      }
    }

    // Prevent sliding too far
    const maxTranslate = -(this.benefits.length - 1) * 270; // 250px card width + 20px margin
    this.currentTranslate = Math.max(
      Math.min(0, this.currentTranslate),
      maxTranslate
    );

    this.setSliderPosition();
    this.prevTranslate = this.currentTranslate;
    this.sliderTrack.nativeElement.classList.remove('active');
  }

  animation() {
    this.setSliderPosition();
    if (this.isDragging) {
      requestAnimationFrame(this.animation.bind(this));
    }
  }

  setSliderPosition() {
    this.sliderTrack.nativeElement.style.transform = `translateX(${this.currentTranslate}px)`;
  }

  getPositionX(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent
      ? event.clientX
      : event.touches[0].clientX;
  }
}
