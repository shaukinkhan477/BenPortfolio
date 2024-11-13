import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TechnologiesComponent } from "../../home-page-sections/technologies/technologies.component";
import { Router } from '@angular/router';
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


  constructor(
    public modalService: ModalService,
    private router: Router,
    private myServicesService: MyServicesService,
    private BenifitsOfMyServicesService: BenifitsOfMyServicesService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    // Fetch the data from the service
    this.myServicesService.getServices().subscribe((data) => {
      this.services = data;
    });

    this.BenifitsOfMyServicesService.getBenefits().subscribe((data) => {
      this.benefits = data;
    });

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit() {
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
  }

  // Open the "Get in Touch" modal
  openGetInTouchModal() {
    this.modalService.openModal();
  }
}
