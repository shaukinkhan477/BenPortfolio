import { CommonModule, isPlatformBrowser } from '@angular/common';
// import { Component } from '@angular/core';
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit, AfterViewInit {

    @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;

  project1 = 'assets/images/projectImages/benProject-1.jpeg';
  project2 = 'assets/images/projectImages/benProject-2.jpeg';
  project3 = 'assets/images/projectImages/benProject-3.png';
  project4 = 'assets/images/projectImages/benProject-4.jpg';

  projects:any = [
    {
      title: 'Referent technique ANGULAR',
      employer: 'Prios',
      year: 'Nov 2023 - Present',
      image: this.project1,
      description:
        `◼Framework and train the dev team on the ANGULAR ecosystem co-Advise management on technical choices front, tests, mobile. ◼️◼Framework Develop testing strategies and implement them. ◼️◼Framework design POCs for demos. ◼️◼Framework Carry out feasibility studies. ◼️◼Framework Refactor, rewrite and document code left by the old ones from the box. ◼️◼Framework produce projects in recent versions while maintaining the stability of the customer experience.`
        .replaceAll('◼️', '<br>'),
      technologies: ['ANGULAR 9, 11, 14', 'Rxjs', 'Jest, jasmine, Karma', 'Node.js 12, 14, 16, 18',],
    },
    {
      title: 'Software Trainer (Web-Process)',
      employer: 'Trusted Advisors Group',
      year: 'May 2023 - Aug 2023',
      image: this.project2,
      description:
        `◼Angular Advanced
         ◼️◼FrontEnd Architecture
         ◼️◼Github Ci/CD
         ◼️◼Bootstrapping apps with firebase.`.replaceAll('◼️', '<br>'),
      technologies: ['Angular', 'JavaScript', 'CSS', 'Firebase', 'GitHub & Git'],
    },
    {
      title: 'Senior Front-End Consultant (Angular)',
      employer: 'Saint-Gobain',
      year: 'Apr 2022 - Apr 2023',
      image: this.project3,
      description:
        `◼Angular 10 ( 5 year old +100.000 ligne of code)
        ◼️◼RXJS
        ◼️◼ngrx
        ◼️◼typescript
        ◼️◼Java 11
        ◼️◼Atlassina : jira, confluence
        ◼️◼Jinkins`.replaceAll('◼️', '<br>'),
      technologies: ['Angular', 'Java', 'Docker ', 'Maven'],
    },
    {
      title: 'Consultant Front-End Angular',
      employer: 'ArcelorMitta',
      year: 'Sep 2021 - Feb 2022',
      image: this.project4,
      description:
        `◼NX project v12
        ◼️◼Angular 13
        ◼️◼Project : WebCare`.replaceAll('◼️', '<br>'),
      technologies: ['Design d’interface utilisateur', 'CSS', 'Angular 13', 'Express', 'mySQL'],
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
    }
  }

  private initAnimations(): void {
    // Grab all the DOM elements of the project cards
    const cards = this.projectCards.map((card) => card.nativeElement);

    gsap.from(cards, {
      opacity: 0,
      y: 50,
      duration: 4,
      stagger: 0.3,
      ease: 'elastic.out(1, 0.3)',
      scrollTrigger: {
        trigger: '.projects-section', // We'll add a class in template
        start: 'top 80%', // start the animation when section top hits 80% of viewport
      },
    });
  }
}
