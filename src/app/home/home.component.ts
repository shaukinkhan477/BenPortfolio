import { Component } from '@angular/core';
import { ContactModalComponent } from '../shared/modals/contact-modal/contact-modal.component';
import { HeroComponent } from "../home-page-sections/hero/hero.component";
import { AboutComponent } from "../home-page-sections/about/about.component";
import { TechnologiesComponent } from "../home-page-sections/technologies/technologies.component";
import { ProjectsComponent } from "../home-page-sections/projects/projects.component";
import { MyTeamComponent } from "../home-page-sections/my-team/my-team.component";
import { TestimonialComponent } from "../home-page-sections/testimonial/testimonial.component";
import { ContactComponent } from "../home-page-sections/contact/contact.component";




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, TechnologiesComponent, ProjectsComponent, ContactModalComponent, MyTeamComponent, TestimonialComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
