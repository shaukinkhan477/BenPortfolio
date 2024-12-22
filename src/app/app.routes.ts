import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { AboutComponent } from './home-page-sections/about/about.component';
import { ContactComponent } from './home-page-sections/contact/contact.component';
import { ExperienceComponent } from './home-page-sections/experience/experience.component';
import { HeroComponent } from './home-page-sections/hero/hero.component';
import { ProjectsComponent } from './home-page-sections/projects/projects.component';
import { ServicesComponent } from './home-page-sections/services/services.component';
import { TechnologiesComponent } from './home-page-sections/technologies/technologies.component';
import { TestimonialComponent } from './home-page-sections/testimonial/testimonial.component';
import { MyServicesComponent } from './components/my-services/my-services.component';
import { WhyMeComponent } from './components/why-me/why-me.component';
import { CaseStudyDetailComponent } from './components/case-study-detail/case-study-detail.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' }, },
  { path: 'hero', component: HeroComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'technologies', component: TechnologiesComponent},
  { path: 'testimonials', component: TestimonialComponent},
  { path: 'blog', component: BlogComponent, data: { animation: 'BlogPage' }, },
  { path: 'blog/:id', component: BlogDetailComponent, data: { animation: 'BlogPage' }, },
  { path: 'my-services', component: MyServicesComponent, data: { animation: 'MyServicePage' },},
  { path: 'why-me', component: WhyMeComponent, data: { animation: 'WhyMePage' }, },
  {
    path: 'case-study',
    loadComponent: () => import('./components/case-study/case-study.component').then(m => m.CaseStudyComponent),
    data: { animation: 'CaseStudyPage' },
  },
  { path: 'case-study/:id', component: CaseStudyDetailComponent },
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
