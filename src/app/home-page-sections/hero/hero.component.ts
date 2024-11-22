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

      gsap.from('.heroImage', {
        y: -20,
        opacity: 0,
        duration: 2.5,
        delay: 0.4,
        scale: 0.2
      });

      gsap.from('.heroHighLights', {
        y: -20,
        opacity: 0,
        duration: 2.5,
        scale: 0.2,
        scrollTrigger: {
          trigger: '.heroHighLights',
          scroller: 'body',
          // markers: true,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 2
        }
      });

      // Refresh ScrollTrigger after initializing animations
      ScrollTrigger.refresh();
    }, 0);
  }

  onMouseMove(event: MouseEvent) {
    const image = this.heroImage.nativeElement;

    // Get dimensions and positions
    const rect = image.getBoundingClientRect();

    // Calculate the mouse position relative to the center of the image
    const xPos = event.clientX - rect.left - rect.width / 2;
    const yPos = event.clientY - rect.top - rect.height / 2;

    // Set maximum rotation values
    const maxRotation = 20; // Adjust for more or less rotation

    // Calculate rotation values
    const xRotation = (yPos / rect.height) * maxRotation;
    const yRotation = -(xPos / rect.width) * maxRotation;

    // Use GSAP to animate the rotation
    gsap.to(image, {
      rotationX: xRotation,
      rotationY: yRotation,
      transformPerspective: 500,
      transformOrigin: 'center',
      duration: 0.3,
      ease: 'power3.out',
    });
  }

  onMouseLeave() {
    const image = this.heroImage.nativeElement;

    // Reset the rotation when the mouse leaves
    gsap.to(image, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: 'power3.out',
    });
  }
}
