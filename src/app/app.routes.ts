import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './page-sections/about/about.component';
import { ContactComponent } from './page-sections/contact/contact.component';
import { ExperienceComponent } from './page-sections/experience/experience.component';
import { HeroComponent } from './page-sections/hero/hero.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './page-sections/projects/projects.component';
import { ServicesComponent } from './page-sections/services/services.component';
import { TechnologiesComponent } from './page-sections/technologies/technologies.component';
import { TestimonialComponent } from './page-sections/testimonial/testimonial.component';

export const routes: Routes = [
  { path: '', redirectTo: '/hero', pathMatch: 'full' },
  { path: 'hero', component: HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'testimonials', component: TestimonialComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
