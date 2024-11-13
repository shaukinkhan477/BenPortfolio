import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Benefit } from 'src/app/shared/models/benefit.model';
import { MyServices } from 'src/app/shared/models/myServices.model';
import { ModalService } from 'src/app/shared/services/modal.service';
import { MyServicesService } from 'src/app/shared/services/my-services.service';
import { BenifitsOfMyServicesService } from 'src/app/shared/services/benifitsOfMyServices.service';
import { TechnologiesComponent } from "../../home-page-sections/technologies/technologies.component";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule, TechnologiesComponent],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.css'
})
export class WhyMeComponent implements OnInit, AfterViewInit {

  benefits: Benefit[] = [];
  services: MyServices[] = [];

  constructor(public modalService: ModalService,
    private router: Router,
    private myServicesService: MyServicesService,
    private BenifitsOfMyServicesService: BenifitsOfMyServicesService) { }

    ngOnInit() {
    // Fetch the data from the service
    this.myServicesService.getServices().subscribe((data) => {
    this.services = data;
    });

    this.BenifitsOfMyServicesService.getBenefits().subscribe((data) => {
    this.benefits = data;
  });
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

      // Animate the heading
  gsap.from('.whyWork', {
    duration: 3,
    y: -50,
    opacity: 0,
    // rotate:180,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.whyWork',
      start: 'top 80%',
    },
  });

    // Animate the "Request a Service" button
  gsap.from('.request-service-button', {
    duration: 1,
    x: 50,
    opacity: 0,
    ease: 'power3.out',
    rotate:360,
    scrollTrigger: {
      trigger: '.request-service-button',
      start: 'top 80%',
    },
  });

    // Animate the highlight boxes
gsap.from('.heroHighLight', {
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.heroHighLights',
    start: 'top 80%',
  },
});

    // Animate each benefit card
gsap.utils.toArray('.benefit-card').forEach((card: any, index: number) => {
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

    // Add hover effect to benefit cards
const benefitCards = document.querySelectorAll('.benefit-card');

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
    // Add hover effects
    this.addHoverEffects();

  }

  private addHoverEffects() {

  // Benefit cards hover effects
    const benefitCards = document.querySelectorAll('.benefit-card');

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
