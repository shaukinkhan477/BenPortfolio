import { Component, OnInit } from '@angular/core';

import { GoogleTagManagerService } from './shared/services/google-tag-manager.service';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'MyPortfolio';

  constructor(private gtmService: GoogleTagManagerService) { }

  ngOnInit(): void {
    this.gtmService.loadGTM();
  }
}
