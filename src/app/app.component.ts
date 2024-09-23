import { Component, OnInit } from '@angular/core';

import { GoogleTagManagerService } from './shared/google-tag-manager.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
