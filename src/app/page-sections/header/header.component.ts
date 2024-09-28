// header.component.ts

import { ModalService } from '../../shared/modal.service';
import { Component, HostListener, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { IAboutMe } from '../../shared/models/about-me-interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {

  constructor(private modalService: ModalService) { }

  // Open the "Get in Touch" modal
  openGetInTouchModal() {
    this.modalService.openModal();  // Call the service to show the modal
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const socialIcons = document.getElementById('social-icons');
    if (window.scrollY > 50) {
      // Move to fixed position when scrolling down
      socialIcons?.classList.add('fixed', 'top-1/2', 'right-0', '-translate-y-1/2', 'm-8', 'flex-col');
      socialIcons?.classList.remove('items-center', 'gap-4');
    } else {
      // Return to header on top of the page
      socialIcons?.classList.remove('fixed', 'top-1/2', 'right-0', '-translate-y-1/2', 'm-8', 'flex-col');
      socialIcons?.classList.add('items-center', 'gap-6');
    }
  }


  // Open the modal when the "Get in Touch" button is clicked
  ngAfterViewInit() {
    const modal = document.getElementById('contact-modal');

    // Service Modal Logic
    const serviceBtn = document.getElementById('service-btn');
    const serviceModal = document.getElementById('service-modal');
    const closeServiceModalBtn = document.getElementById('close-service-modal');

    // Show "Services" modal when clicked
    serviceBtn?.addEventListener('click', () => {
      serviceModal?.classList.remove('hidden');
      serviceModal?.classList.add('flex');
    });

    // Close "Services" modal
    closeServiceModalBtn?.addEventListener('click', () => {
      serviceModal?.classList.add('hidden');
      serviceModal?.classList.remove('flex');
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
      if (e.target === serviceModal) {
        serviceModal?.classList.add('hidden');
        serviceModal?.classList.remove('flex');
      }
    });


    // Handle "Get in Touch" button in the service modal
    const serviceGetInTouchBtn = document.getElementById('service-get-in-touch-btn');
    serviceGetInTouchBtn?.addEventListener('click', () => {
      // Close the service modal
      serviceModal?.classList.add('hidden');
      serviceModal?.classList.remove('flex');

      // Open the "Get in Touch" modal
      modal?.classList.remove('hidden');
      modal?.classList.add('flex');
    });
  }


}
