import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Benefit } from 'src/app/shared/models/benefit.model';
import { BenifitsOfMyServicesService } from 'src/app/shared/services/benifitsOfMyServices.service';

@Component({
  selector: 'app-hero-highlights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-highlights.component.html',
  styleUrl: './hero-highlights.component.css'
})
export class HeroHighlightsComponent implements OnInit {

  benefits: Benefit[] = [];

  constructor(private BenifitsOfMyServicesService: BenifitsOfMyServicesService) { }


  ngOnInit() {
    this.BenifitsOfMyServicesService.getBenefits().subscribe((data) => {
      this.benefits = data;
    });
  }

}

