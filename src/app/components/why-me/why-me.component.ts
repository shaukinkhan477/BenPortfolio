import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { Router } from '@angular/router';
import { Benefit } from 'src/app/shared/models/benefit.model';
import { MyServices } from 'src/app/shared/models/myServices.model';
import { ModalService } from 'src/app/shared/services/modal.service';
import { MyServicesService } from 'src/app/shared/services/my-services.service';
import { BenifitsOfMyServicesService } from 'src/app/shared/services/benifitsOfMyServices.service';
import { TechnologiesComponent } from "../../home-page-sections/technologies/technologies.component";

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule, TechnologiesComponent],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.css'
})
export class WhyMeComponent implements OnInit {

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


    // Initialize AOS animations
    AOS.init({
      duration: 800,
      once: true,
    });
  }

    // Open the "Get in Touch" modal
  openGetInTouchModal() {
    this.modalService.openModal();
  }

}
