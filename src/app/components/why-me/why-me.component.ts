import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, OnInit, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { Benefit } from 'src/app/shared/models/benefit.model';
import { MyServices } from 'src/app/shared/models/myServices.model';
import { ModalService } from 'src/app/shared/services/modal.service';
import { MyServicesService } from 'src/app/shared/services/my-services.service';
import { BenifitsOfMyServicesService } from 'src/app/shared/services/benifitsOfMyServices.service';
import { TechnologiesComponent } from "../../home-page-sections/technologies/technologies.component";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TestimonialComponent } from "../../home-page-sections/testimonial/testimonial.component";

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule, TechnologiesComponent, TestimonialComponent],
  templateUrl: './why-me.component.html',
  styleUrls: ['./why-me.component.css']
})
export class WhyMeComponent implements OnInit, AfterViewInit {

  benefits: Benefit[] = [];
  services: MyServices[] = [];
  isBrowser = false;

  constructor(
    public modalService: ModalService,
    private myServicesService: MyServicesService,
    private BenifitsOfMyServicesService: BenifitsOfMyServicesService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Fetch the data from the service
    this.myServicesService.getServices().subscribe((data) => {
      this.services = data;
      this.checkDataLoaded();
    });

    this.BenifitsOfMyServicesService.getBenefits().subscribe((data) => {
      this.benefits = data;
      this.checkDataLoaded();
    });
  }

  ngAfterViewInit() {
    // Nothing here yet, will handle in checkDataLoaded when both data sets load
  }

  private checkDataLoaded() {
    if (this.services.length > 0 && this.benefits.length > 0 && this.isBrowser) {
      // Both data sets are loaded and we are in the browser
      this.cdr.detectChanges(); // Ensure view updates
      setTimeout(() => {
        if (this.isBrowser) {
          this.initGSAPAnimations();
        }
      }, 0);
    }
  }

  private initGSAPAnimations() {
    if (!this.isBrowser) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.whyWork', {
      duration: 2,
      y: -50,
      opacity: 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.whyWork',
        start: 'top 80%',
        once: true,
      },
    });

    gsap.from('.request-service-button', {
      duration: 1,
      x: 50,
      opacity: 0,
      ease: 'power3.out',
      rotate: 360,
      scrollTrigger: {
        trigger: '.request-service-button',
        start: 'top 80%',
        once: true,
      },
    });

    // Animate each benefit card
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach((card: Element, index: number) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        rotate: 180,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
        delay: index * 0.1,
      });
    });

    // Add hover effects after the cards are available
    this.addHoverEffects(benefitCards);

    ScrollTrigger.refresh();
  }

  private addHoverEffects(benefitCards: NodeListOf<Element>) {
    if (!this.isBrowser) return;

    benefitCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
          duration: 0.3,
          ease: 'power3.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: 'none',
          duration: 0.3,
          ease: 'power3.out',
        });
      });
    });
  }

  // Open the "Get in Touch" modal
  openGetInTouchModal() {
    this.modalService.openModal();
  }
}
