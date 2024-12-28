import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule as _NgModule } from '@angular/core';  // Keep your existing imports

// If you still need these references for other reasons, you can keep them,
// but they are no longer required for lazy-loaded routes:
// import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
// import { AboutComponent } from './home-page-sections/about/about.component';
// import { ContactComponent } from './home-page-sections/contact/contact.component';
// import { ExperienceComponent } from './home-page-sections/experience/experience.component';
// import { HeroComponent } from './home-page-sections/hero/hero.component';
// import { ProjectsComponent } from './home-page-sections/projects/projects.component';
// import { ServicesComponent } from './home-page-sections/services/services.component';
// import { TechnologiesComponent } from './home-page-sections/technologies/technologies.component';
// import { TestimonialComponent } from './home-page-sections/testimonial/testimonial.component';
// import { MyServicesComponent } from './components/my-services/my-services.component';
// import { WhyMeComponent } from './components/why-me/why-me.component';
// import { CaseStudyDetailComponent } from './components/case-study-detail/case-study-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Regular eager-loaded routes
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'HomePage' },
  },
  {
    path: 'hero',
    loadComponent: () =>
      import('./home-page-sections/hero/hero.component').then(m => m.HeroComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./home-page-sections/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./home-page-sections/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./home-page-sections/experience/experience.component').then(m => m.ExperienceComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./home-page-sections/projects/projects.component').then(m => m.ProjectsComponent),
  },
  {
    path: 'technologies',
    loadComponent: () =>
      import('./home-page-sections/technologies/technologies.component').then(m => m.TechnologiesComponent),
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./home-page-sections/testimonial/testimonial.component').then(m => m.TestimonialComponent),
  },

  // Lazy-load blog main route
  {
    path: 'blog',
    loadComponent: () =>
      import('./components/blog/blog.component').then(m => m.BlogComponent),
    data: { animation: 'BlogPage' },
  },
  // Lazy-load blog detail route
  {
    path: 'blog/:id',
    loadComponent: () =>
      import('./components/blog-detail/blog-detail.component').then(m => m.BlogDetailComponent),
    data: { animation: 'BlogPage' },
  },

  // Lazy-load "My Services" route
  {
    path: 'my-services',
    loadComponent: () =>
      import('./components/my-services/my-services.component').then(m => m.MyServicesComponent),
    data: { animation: 'MyServicePage' },
  },

  // Lazy-load the "services" route (home-page-sections/services)
  {
    path: 'services',
    loadComponent: () =>
      import('./home-page-sections/services/services.component').then(m => m.ServicesComponent),
  },

  // Lazy-load "Why Me?" route
  {
    path: 'why-me',
    loadComponent: () =>
      import('./components/why-me/why-me.component').then(m => m.WhyMeComponent),
    data: { animation: 'WhyMePage' },
  },

  // Lazy-load the /case-study route
  {
    path: 'case-study',
    loadComponent: () =>
      import('./components/case-study/case-study.component').then(m => m.CaseStudyComponent),
    data: { animation: 'CaseStudyPage' },
  },
  // Lazy-load case study detail route
  {
    path: 'case-study/:id',
    loadComponent: () =>
      import('./components/case-study-detail/case-study-detail.component').then(m => m.CaseStudyDetailComponent),
  },

  // Lazy-load the /products route
  {
    path: 'products',
    loadComponent: () =>
      import('./components/products/products.component').then(m => m.ProductsComponent),
    data: { animation: 'ProductsPage' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
