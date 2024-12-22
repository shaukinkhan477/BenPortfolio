import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, AfterViewInit, ChangeDetectorRef, Inject, PLATFORM_ID  } from '@angular/core';
import { TechnologiesComponent } from "../../home-page-sections/technologies/technologies.component";
import { ModalService } from 'src/app/shared/services/modal.service';
import { TypingEffectComponent } from '../typing-effect/typing-effect.component';
import { Benefit } from 'src/app/shared/models/benefit.model';
import { MyServices } from 'src/app/shared/models/myServices.model';
import { MyServicesService } from 'src/app/shared/services/my-services.service';
import { BenifitsOfMyServicesService } from 'src/app/shared/services/benifitsOfMyServices.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-my-services',
  standalone: true,
  imports: [CommonModule, TechnologiesComponent, TypingEffectComponent],
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit, AfterViewInit {

  services: MyServices[] = [];
  benefits: Benefit[] = [];
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
    if (this.isBrowser) {
       window.scrollTo(0, 0);

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
     }


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
    // Do not initialize GSAP animations here
  }

  private checkDataLoaded() {
    if (this.services.length > 0 && this.benefits.length > 0) {
      // Both data sets are loaded
      // Wait for the view to update
      this.cdr.detectChanges(); // Ensure view updates
      setTimeout(() => {
        this.initGSAPAnimations();
      }, 0);
    }
  }

  private initGSAPAnimations() {
    // Animate the header
    gsap.from('.serviceCards', {
      duration: 3,
      y: -50,
      opacity: 0,
      ease: 'power3.out',
    });

    // Animate the "Request a Service" button
    gsap.from('.request-service-button', {
      duration: 1,
      x: 50,
      opacity: 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.request-service-button',
        start: 'top 80%',
      },
    });

    // Animate each service card on scroll
    gsap.utils.toArray('.service-card').forEach((card: any, index: number) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: index * 0.1,
      });
    });

    // Animate each benefit card on scroll
    gsap.utils.toArray('.benefit-card').forEach((card: any, index: number) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: index * 0.1,
      });
    });

    // Refresh ScrollTrigger after initializing animations
    ScrollTrigger.refresh();
  }

  // Open the "Get in Touch" modal
  openGetInTouchModal() {
    this.modalService.openModal();
  }
}
