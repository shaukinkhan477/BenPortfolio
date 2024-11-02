import { Component, OnInit } from '@angular/core';

import { GoogleTagManagerService } from './shared/services/google-tag-manager.service';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { ContactModalComponent } from "./shared/contact-modal/contact-modal.component";
import { MyServicesComponent } from "./components/my-services/my-services.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ContactModalComponent, MyServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Ben Portfolio';

  constructor(private gtmService: GoogleTagManagerService, private router: Router) { }

  ngOnInit(): void {
    this.gtmService.loadGTM();
  }

  showHeaderFooter(): boolean {
    // Define routes where header and footer should be hidden
    const noHeaderFooterRoutes = ['/login', '/register'];
    return !noHeaderFooterRoutes.includes(this.router.url);
  }
}
