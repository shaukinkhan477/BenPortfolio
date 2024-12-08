import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('aboutSection', { static: false }) aboutSection!: ElementRef;

  AboutSectionImage = '/assets/images/myImages/about.jpg';
  benResume = '/assets/files/BenResume.pdf';
  about = "Engineer in Computer science, software engineering. Stock Trader, Political and Economic Analyst. Looking for high added value opportunities, also enthusiastic to meet ambitious people.";

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
    }
  }

  initAnimations(): void {
    gsap.from(this.aboutSection.nativeElement, {
      opacity: 0,
      y: 50,
      duration: 4,
      stagger: 0.3,
      ease: 'elastic.out(1, 0.3)',
      scrollTrigger: {
        trigger: this.aboutSection.nativeElement,
        start: 'top 80%',
      },
    });
  }
}
