import { AboutComponent } from '../page-sections/about/about.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from '../page-sections/contact/contact.component';
import { ContactModalComponent } from '../shared/contact-modal/contact-modal.component';
import { ExperienceComponent } from '../page-sections/experience/experience.component';
import { HeaderComponent } from '../page-sections/header/header.component';
import { HeroComponent } from '../page-sections/hero/hero.component';
import { ProjectsComponent } from '../page-sections/projects/projects.component';
import { ServicesComponent } from '../page-sections/services/services.component';
import { TechnologiesComponent } from '../page-sections/technologies/technologies.component';
import { TestimonialComponent } from '../page-sections/testimonial/testimonial.component';
import { MyTeamComponent } from "../page-sections/my-team/my-team.component";
import { FooterComponent } from "../components/footer/footer.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, AboutComponent, TechnologiesComponent, ExperienceComponent, ProjectsComponent, ContactComponent, TestimonialComponent, ServicesComponent, ContactModalComponent, MyTeamComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
