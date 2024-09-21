import { ModalService } from '../../shared/modal.service';
import { Component, HostListener, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

export interface IAboutMe {
  heading: string;
  profession: string;
  aboutMePara1: string;
  aboutMePara2: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private modalService: ModalService) {}

  aboutMe: IAboutMe = {
    heading: 'About Me',
    profession: 'Senior Web FrontEnd Consultant (Angular)',
    aboutMePara1: 'I m Ben, a Senior Angular Consultant. I love working with web technologies and crafting interactive and responsive user interfaces',
    aboutMePara2: 'I like to solve design problems, create user-friendly interfaces, and develop rich web experiences & applications.'
  }

  @HostListener('window:scroll', ['$event'])
  /**
   * Handles the behavior of the social icons in the header component when the user scrolls the page.
   * This method is called when the window scroll event is triggered.
   * It moves the social icons to a fixed position on the right side of the screen when the user scrolls down more than 50 pixels, and returns them to their original position at the top of the header when the user scrolls back up.
   */
  onWindowScroll(): void {
    // Ensure this runs only in the browser environment
    if (isPlatformBrowser(this.platformId)) {
      const socialIcons: HTMLElement | null = document.getElementById('social-icons');
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
  }

  /**
   * Opens the "Get in Touch" modal by calling the `openModal()` method on the `modalService`.
   */
  openGetInTouchModal() {
    this.modalService.openModal();  // Call the service to show the modal
  }


  /**
   * Handles the behavior of the "Get in Touch" modal in the header component.
   * This method is called after the component's view has been initialized.
   * It attaches event listeners to the "Get in Touch" button, the close button, and the modal itself to control the modal's visibility.
   */
  ngAfterViewInit(): void {
    // Ensure this runs only in the browser environment
    if (isPlatformBrowser(this.platformId)) {
      const getInTouchBtn: HTMLElement | null = document.getElementById('get-in-touch-btn');
      const modal: HTMLElement | null = document.getElementById('contact-modal');
      const closeModalBtn: HTMLElement | null = document.getElementById('close-modal');

      getInTouchBtn?.addEventListener('click', () => {
        modal?.classList.remove('hidden');
        modal?.classList.add('flex');
      });

      // Close the modal when clicking the close button
      closeModalBtn?.addEventListener('click', () => {
        modal?.classList.add('hidden');
        modal?.classList.remove('flex');
      });

      // Close the modal when clicking outside of the modal content
      window.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal?.classList.add('hidden');
          modal?.classList.remove('flex');
        }
      });
    }
  }}
