import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

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
    const getInTouchBtn = document.getElementById('get-in-touch-btn');
    const modal = document.getElementById('contact-modal');
    const closeModalBtn = document.getElementById('close-modal');

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

}
