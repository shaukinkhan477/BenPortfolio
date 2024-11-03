import { Injectable } from '@angular/core';
import { Benefit } from '../models/benefit.model';

@Injectable({
  providedIn: 'root',
})
export class BenifitsOfMyServicesService {
  constructor() { }

    getBenefits(): Benefit[] {
    return [
          {
      title: 'Expertise',
      description: 'Over 10+ years of experience in web consulting and architecture.',
      icon: 'bi bi-lightning-charge',
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored solutions to meet your unique business needs.',
      icon: 'bi bi-tools',
    },
    {
      title: 'Proven Track Record',
      description: 'Successfully delivered projects across various industries.',
      icon: 'bi bi-graph-up',
    },
    {
      title: 'Cutting-Edge Technologies',
      description: 'Utilizing the latest technologies to build scalable systems.',
      icon: 'bi bi-cpu',
    },
    {
      title: 'Client-Centered Approach',
      description: 'Focusing on client satisfaction and long-term partnerships.',
      icon: 'bi bi-people',
    },
    {
      title: 'Transparent Communication',
      description: 'Keeping you informed every step of the way.',
      icon: 'bi bi-chat-dots',
    },
    {
      title: 'Quality Assurance',
      description: 'Committed to delivering high-quality, robust solutions.',
      icon: 'bi bi-check-circle',
    },
    ];
  }
}
