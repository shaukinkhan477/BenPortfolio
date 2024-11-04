import { ModalService } from '../../shared/services/modal.service';
import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { BlogComponent } from "../blog/blog.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, BlogComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isHomePage: boolean = false;
  currentRoute: string = '';

  constructor(public modalService: ModalService, private router: Router) { }



  ngOnInit() {
    // Check the initial route
    this.checkCurrentRoute();

    // Subscribe to router events to update isHomePage when the route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkCurrentRoute();
      }
    });
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

    // Method to check if the current route is '/home'
  // checkCurrentRoute() {
  //   this.isHomePage = this.router.url === '/home' || this.router.url === '/';
  // }

   // Method to check if the current route is '/home' or '/'
  checkCurrentRoute() {
    const currentUrl = this.router.url.split('?')[0].split('#')[0]; // Remove query params and fragments
    this.isHomePage = currentUrl === '/home' || currentUrl === '/';
    this.currentRoute = currentUrl;
  }

    // Method to check if a given route is active
  isActive(route: string): boolean {
    return this.currentRoute.startsWith(route);
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
    this.router.navigate(['/my-services'])
  }

  whyMe() {
    this.router.navigate(['/why-me'])
  }

}
