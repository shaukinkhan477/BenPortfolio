import { Component, EventEmitter, OnInit, Output, Inject, PLATFORM_ID  } from '@angular/core';
import { GoogleTagManagerService } from './shared/services/google-tag-manager.service';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { ContactModalComponent } from "./shared/modals/contact-modal/contact-modal.component";
import { BookConsultationModalComponent } from "./shared/modals/book-consultation-modal/book-consultation-modal.component";
import { routeAnimations } from './route-animations';
import { AnimationEvent as AngularAnimationEvent } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ContactModalComponent, BookConsultationModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeAnimations],
})

export class AppComponent implements OnInit {
  title = 'Ben Portfolio';

    @Output() routeAnimationDone = new EventEmitter<void>();

  constructor(
    private gtmService: GoogleTagManagerService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

//   prepareRoute(outlet: RouterOutlet) {
//   return outlet && outlet.activatedRouteData ? outlet.activatedRouteData['animation'] || outlet.activatedRoute.snapshot.url.join('/') : '';
// }

     onRouteAnimationDone(event: AngularAnimationEvent) {
    // console.log('Animation done:', event);
    // Handle the animation completion event
  }


  ngOnInit(): void {
     if (isPlatformBrowser(this.platformId)) {
      // Run only in the browser
      this.gtmService.loadGTM();
    }
  }

  showHeaderFooter(): boolean {
    // Define routes where header and footer should be hidden
    const noHeaderFooterRoutes = ['/login', '/register'];
    return !noHeaderFooterRoutes.includes(this.router.url);
  }
}
