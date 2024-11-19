import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {

  MyheroSectionImage = '/assets/images/myImages/kevinRushProfile.png'
  benResume = '/assets/files/BenResume.pdf'
  name = "Benyakoub M."
  profession = "Senior Web FrontEnd Consultant (Angular)"
  heroContent = "As a Senior Angular Consultant, I bring a wealth of experience in building dynamic, responsive, and scalable web applications using Angular and its modern ecosystem. Over the years, I have honed my expertise in developing front-end solutions that prioritize performance, maintainability, and user experience. I specialize in architecting complex, enterprise-level applications while following best practices in component design, state management, and TypeScript. With a strong understanding of Angular's inner workings, I am adept at solving intricate technical challenges, optimizing code, and mentoring development teams.";

  ngAfterViewInit() {

    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline()

    tl.from(".heroContent", {
      y: -20,
      opacity: 0,
      duration: 2.5,
      delay: 0.4,
      x: -500,
      stagger:1
    })

    gsap.from(".heroImage", {
      y: -20,
      opacity: 0,
      duration: 2.5,
      delay: 0.4,
      scale:0.2,
    })
    gsap.from(".heroHighLights", {
      y: -20,
      opacity: 0,
      duration: 2.5,
      scale: 0.2,
      scrollTrigger: {
        trigger: ".heroHighLights",
        scroller: "body",
        // markers: true, 
        start: 'top 80%',
        end: "top 40%",
        scrub:2,
      }
    })
  }

}
