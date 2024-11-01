import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './page-sections/about/about.component';
import { ContactComponent } from './page-sections/contact/contact.component';
import { ExperienceComponent } from './page-sections/experience/experience.component';
import { HeroComponent } from './page-sections/hero/hero.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './page-sections/projects/projects.component';
import { ServicesComponent } from './page-sections/services/services.component';
import { TechnologiesComponent } from './page-sections/technologies/technologies.component';
import { TestimonialComponent } from './page-sections/testimonial/testimonial.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'testimonials', component: TestimonialComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
