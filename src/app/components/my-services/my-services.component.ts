import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { TechnologiesComponent } from "../../home-page-sections/technologies/technologies.component";
import { Router } from '@angular/router';
import { ModalService } from 'src/app/shared/services/modal.service';
import { TypingEffectComponent } from '../typing-effect/typing-effect.component';
import { Benefit } from 'src/app/shared/models/benefit.model';
import { MyServices } from 'src/app/shared/models/myServices.model';
import { MyServicesService } from 'src/app/shared/services/my-services.service';
import { BenifitsOfMyServicesService } from 'src/app/shared/services/benifitsOfMyServices.service';

@Component({
  selector: 'app-my-services',
  standalone: true,
  imports: [CommonModule, TechnologiesComponent, TypingEffectComponent],
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.css'
})
export class MyServicesComponent implements OnInit {

  services: MyServices[] = [];
  benefits: Benefit[] = [];
  constructor(public modalService: ModalService,
    private router: Router,
    private myServicesService: MyServicesService,
    private BenifitsOfMyServicesService: BenifitsOfMyServicesService) { }

  ngOnInit() {
    // Fetch the data from the service
    this.services = this.myServicesService.getServices();
    this.benefits = this.BenifitsOfMyServicesService.getBenefits();

    // Initialize AOS animations
    AOS.init({
      duration: 800,
      once: true,
    });
  }
  // Open the "Get in Touch" modal
  openGetInTouchModal() {
    this.modalService.openModal();  // Call the service to show the modal
  }
}
