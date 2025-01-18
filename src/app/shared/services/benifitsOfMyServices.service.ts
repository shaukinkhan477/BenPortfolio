import { Injectable } from '@angular/core';
import { Benefit } from '../models/benefit.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BenifitsOfMyServicesService {
  constructor() {}

  getBenefits(): Observable<Benefit[]> {
    return of([
      {
        title: 'Expertise',
        description:'Over 10+ years of experience in web consulting and architecture.',
        detailedDescription: 'Detailed description about Expertise...',
        icon: 'bi bi-lightning-charge',
      },
      {
        title: 'Custom Solutions',
        description: 'Tailored solutions to meet your unique business needs.',
        detailedDescription: 'Detailed description about Custom Solutions...',
        icon: 'bi bi-tools',
      },
      {
        title: 'Proven Track Record',
        description:
          'Successfully delivered projects across various industries.',
        detailedDescription:
          'Detailed description about Proven Track Record...',
        icon: 'bi bi-graph-up',
      },
      {
        title: 'Cutting-Edge Technologies',
        description:
          'Utilizing the latest technologies to build scalable systems.',
        detailedDescription:
          'Detailed description about Cutting-Edge Technologies...',
        icon: 'bi bi-cpu',
      },
      {
        title: 'Client-Centered Approach',
        description:
          'Focusing on client satisfaction and long-term partnerships.',
        detailedDescription:
          'Detailed description about Client-Centered Approach...',
        icon: 'bi bi-people',
      },
      {
        title: 'Transparent Communication',
        description: 'Keeping you informed every step of the way.',
        detailedDescription:
          'Detailed description about Transparent Communication...',
        icon: 'bi bi-chat-dots',
      },
      {
        title: 'Quality Assurance',
        description: 'Committed to delivering high-quality, robust solutions.',
        detailedDescription: 'Detailed description about Quality Assurance...',
        icon: 'bi bi-check-circle',
      },
    ]);
  }
}
