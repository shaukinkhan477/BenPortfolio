
import { Injectable } from '@angular/core';
import { MyServices } from '../models/myServices.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyServicesService {
  constructor() {}

  getServices(): Observable <MyServices[]> {
    return of ([
{
      title: 'IT Consulting',
      description: 'Providing expert IT advice to improve your business processes.',
      icon: 'bi bi-briefcase',
    },
    {
      title: 'Executive Coaching',
      description: 'Empowering executives with the skills to lead effectively.',
      icon: 'bi bi-person-bounding-box',
    },
    {
      title: 'Web Design',
      description: 'Creating visually appealing and user-friendly websites.',
      icon: 'bi bi-laptop',
    },
    {
      title: 'Interaction Design',
      description: 'Designing interactive elements for enhanced user engagement.',
      icon: 'bi bi-cursor',
    },
    {
      title: 'Backup & Recovery Systems',
      description: 'Implementing reliable backup solutions for data protection.',
      icon: 'bi bi-shield-lock',
    },
    {
      title: 'Web Consultant',
      description: 'Offering expertise to optimize your web presence.',
      icon: 'bi bi-globe',
    },
    {
      title: 'Angular Consultant',
      description: 'Specializing in Angular development and best practices.',
      icon: 'bi bi-code-slash',
    },
    {
      title: 'User Experience Consultant',
      description: 'Improving user satisfaction through better usability.',
      icon: 'bi bi-emoji-smile',
    },
    {
      title: 'Web FrontEnd Architect',
      description: 'Architecting scalable and maintainable front-end solutions.',
      icon: 'bi bi-layers',
    },
    {
      title: 'Web System Builder and Designer',
      description: 'Building and designing robust web systems.',
      icon: 'bi bi-building',
    },
    {
      title: 'Custom Solutions',
      description: 'Developing tailored solutions to meet unique business needs.',
      icon: 'bi bi-puzzle',
    },
    {
      title: 'Technical Writing',
      description: 'Creating clear and concise technical documentation.',
      icon: 'bi bi-journal-text',
    },
    {
      title: 'SEO Services',
      description: 'Optimizing your website to rank higher on search engines.',
      icon: 'bi bi-graph-up',
    },
    ]);
  }
}
