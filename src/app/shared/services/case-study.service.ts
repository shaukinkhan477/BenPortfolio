import { Injectable } from '@angular/core';
import { CaseStudy } from '../models/case-study.model';

@Injectable({
  providedIn: 'root',
})
export class CaseStudyService {
  private project1 = 'assets/images/projectImages/benProject-1.jpeg';
  private project2 = 'assets/images/projectImages/benProject-2.jpeg';
  private project3 = 'assets/images/projectImages/benProject-3.png';
  private project4 = 'assets/images/projectImages/benProject-4.jpg';

  private projects: CaseStudy[] = [
    {
      id: 1,
      title: 'Referent Technique ANGULAR',
      employer: 'Prios',
      year: 'Nov 2023 - Present',
      image: this.project1,
      description:
        `◼Framework and train the dev team on the ANGULAR ecosystem co-Advise management on technical choices front, tests, mobile.
        ◼️◼Framework Develop testing strategies and implement them.
        ◼️◼Framework design POCs for demos.
        ◼️◼Framework Carry out feasibility studies.
        ◼️◼Framework Refactor, rewrite and document code left by the old ones from the box.
        ◼️◼Framework produce projects in recent versions while maintaining the stability of the customer experience.`
          .replaceAll('◼️', '<br>'),
      technologies: ['ANGULAR 9, 11, 14', 'RxJS', 'Jest, Jasmine, Karma', 'Node.js 12, 14, 16, 18'],
    },
    {
      id: 2,
        title: 'Software Trainer (Web-Process)',
        employer: 'Trusted Advisors Group',
        year: 'May 2023 - Aug 2023',
        image: this.project2,
        description: `◼Angular Advanced ◼️◼FrontEnd Architecture ◼️◼GitHub CI/CD ◼️◼Bootstrapping apps with Firebase.`.replaceAll('◼️', '<br>'),
        technologies: ['Angular', 'JavaScript', 'CSS', 'Firebase', 'GitHub & Git'],
      },
    {
        id: 3,
        title: 'Senior Front-End Consultant (Angular)',
        employer: 'Saint-Gobain',
        year: 'Apr 2022 - Apr 2023',
        image: this.project3,
        description: `◼Angular 10 (5 years old, +100,000 lines of code) ◼️◼RxJS ◼️◼NgRx ◼️◼TypeScript ◼️◼Java 11 ◼️◼Atlassian: Jira, Confluence ◼️◼Jenkins`.replaceAll('◼️', '<br>'),
        technologies: ['Angular', 'Java', 'Docker', 'Maven'],
      },
    {
        id: 4,
        title: 'Consultant Front-End Angular',
        employer: 'ArcelorMittal',
        year: 'Sep 2021 - Feb 2022',
        image: this.project4,
        description: `◼NX Project v12 ◼️◼Angular 13 ◼️◼Project: WebCare`.replaceAll('◼️', '<br>'),
        technologies: ['UI Design', 'CSS', 'Angular 13', 'Express', 'MySQL'],
      },
  ];

  constructor() {}

  getCaseStudies(): CaseStudy[] {
    return this.projects;
  }

  getCaseStudyById(id: number): CaseStudy | undefined {
    return this.projects.find((project) => project.id === id);
  }
  
}
