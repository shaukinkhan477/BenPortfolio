import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  project1 = 'assets/images/benProject1.jpeg';
  project2 = 'assets/images/project-2.jpg';
  project3 = 'assets/images/project-3.jpg';
  project4 = 'assets/images/project-4.jpg';

  projects:any = [
    {
      title: 'Referent technique ANGULAR',
      year: 'Nov 2023 - Present',
      image: this.project1,
      description:
        '◼Framework and train the dev team on the ANGULAR ecosystem co-Advise management on technical choices front, tests, mobile. ◼️◼Framework Develop testing strategies and implement them. ◼️◼Framework design POCs for demos. ◼️◼Framework Carry out feasibility studies. ◼️◼Framework Refactor, rewrite and document code left by the old ones from the box. ◼️◼Framework produce projects in recent versions while maintaining the stability of the customer experience.'
        .replaceAll('◼️', '<br>'),
      technologies: ['ANGULAR 9, 11, 14', 'Rxjs', 'Jest, jasmine, Karma', 'Node.js 12, 14, 16, 18',],
    },
    {
      title: 'Software Trainer (Web-Process)',
      year: 'May 2023 - Aug 2023',
      image: this.project2,
      description:
        `◼Angular Advanced
         ◼️FrontEnd Architecture
         ◼️Github Ci/CD
        ◼️Bootstrapping apps with firebase.`.replaceAll('◼️', '<br>'),
      technologies: ['HTML', 'CSS', 'Angular', 'Firebase'],
    },
    {
      title: 'Portfolio Website',
      image: this.project3,
      description:
        'A personal portfolio website showcasing projects, skills, and contact information.',
      technologies: ['HTML', 'CSS', 'React', 'Bootstrap'],
    },
    {
      title: 'Blogging Platform',
      image: this.project4,
      description:
        'A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.',
      technologies: ['HTML', 'CSS', 'Vue.js', 'Express', 'mySQL'],
    },
  ];

}
