import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { TechnologiesComponent } from "./components/technologies/technologies.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";
import { TestimonialComponent } from "./components/testimonial/testimonial.component";
import { ServicesComponent } from "./components/services/services.component";
import { ContactModalComponent } from "./shared/contact-modal/contact-modal.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, AboutComponent, TechnologiesComponent, ExperienceComponent, ProjectsComponent, ContactComponent, TestimonialComponent, ServicesComponent, ContactModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyPortfolio';
}
