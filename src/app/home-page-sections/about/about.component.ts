import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent{

  AboutSectionImage = '/assets/images/myImages/about.jpg'

  benResume = '/assets/files/BenResume.pdf'

  about = "Engineer in Computer science, software engineering. Stock Trader, Political and Economic Analyst. Looking for high added value opportunities, also enthusiastic to meet ambitious people.";
}
