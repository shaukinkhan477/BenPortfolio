import {
  Component,
  HostListener,
  OnInit,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  OnDestroy
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  isHomePage: boolean = false;
  currentRoute: string = '';
  private isBrowser: boolean;

  // Boolean to track which text to show
  showAlternateText: boolean = false;
  // Holds the reference to the interval
  private textToggleInterval: any;

  constructor(
    public modalService: ModalService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Check the initial route
    this.checkCurrentRoute();

    // Subscribe to router events to update isHomePage when the route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkCurrentRoute();
      }
    });

    if (this.isBrowser) {
      // Toggle text every 1 second
      this.textToggleInterval = setInterval(() => {
        this.showAlternateText = !this.showAlternateText;
      }, 2000);
    }
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      var tl = gsap.timeline();

      tl.from("#logo", {
        y: -20,
        opacity: 0,
        duration: 1,
        delay: 0.4
      });

      tl.from(".headerButton", {
        y: -20,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      });
    }
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed to prevent memory leaks
    if (this.textToggleInterval) {
      clearInterval(this.textToggleInterval);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.isBrowser) {
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
  }

  checkCurrentRoute() {
    const currentUrl = this.router.url.split('?')[0].split('#')[0]; // Remove query params and fragments
    this.isHomePage = currentUrl === '/home' || currentUrl === '/';
    this.currentRoute = currentUrl;
  }

  isActive(route: string): boolean {
    return this.currentRoute.startsWith(route);
  }

  openBookConsultationModal() {
    // Open the Book Consultation modal using the service
    this.modalService.openBookConsultationModal();
  }

  // Open the "Get in Touch" modal
  openGetInTouchModal() {
    this.modalService.openModal();
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToBlog() {
    this.router.navigate(['/blog']);
  }

  navigateToMyService() {
    this.router.navigate(['/my-services']);
  }

  whyMe() {
    this.router.navigate(['/why-me']);
  }

  navigateToCaseStudy() {
    this.router.navigate(['/case-study']);
  }

  navigateToProducts() {
  this.router.navigate(['/products']);
}

}
