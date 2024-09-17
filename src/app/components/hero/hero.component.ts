import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  heroContent: string = "As a Senior Angular Consultant, I bring a wealth of experience in building dynamic, responsive, and scalable web applications using Angular and its modern ecosystem. Over the years, I have honed my expertise in developing front-end solutions that prioritize performance, maintainability, and user experience. I specialize in architecting complex, enterprise-level applications while following best practices in component design, state management, and TypeScript. With a strong understanding of Angular's inner workings, I am adept at solving intricate technical challenges, optimizing code, and mentoring development teams.";
}
