import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {
  blogs = [
    {
      title: 'Best Angular Practices for Performance Optimization',
      category: 'Angular',
      excerpt: 'Learn how to optimize your Angular applications with advanced techniques that reduce load times and enhance user experience.',
      imageUrl: '/assets/images/blogImages/blog1.jpg',
      url: '#',
    },
    {
      title: 'Building Scalable Single Page Applications with Angular',
      category: 'Angular',
      excerpt: 'Explore strategies to design scalable and maintainable SPAs using Angular’s component-based architecture.',
      imageUrl: '/assets/images/blogImages/blog2.jpg',
      url: '#',
    },
    {
      title: 'State Management in Angular: NgRx vs Services',
      category: 'Development',
      excerpt: 'A deep dive into managing state in Angular applications using NgRx and service-based architecture.',
      imageUrl: '/assets/images/blogImages/blog3.jpg',
      url: '#',
    },
    {
      title: 'Migrating Legacy Systems to Angular',
      category: 'Development',
      excerpt: 'How to plan and execute a successful migration from legacy web systems to Angular, ensuring minimal disruption.',
      imageUrl: '/assets/images/blogImages/blog4.jpg',
      url: '#',
    },
    {
      title: 'Optimizing Web Architectures for Angular Applications',
      category: 'Web Architecture',
      excerpt: 'Understand the key architectural patterns and techniques that lead to optimized, high-performance Angular apps.',
      imageUrl: '/assets/images/blogImages/blog5.jpg',
      url: '#',
    },
    {
      title: 'Angular Component Communication: Best Practices',
      category: 'Angular',
      excerpt: 'Master communication between components in Angular using various methods, including Input, Output, and shared services.',
      imageUrl: '/assets/images/blogImages/blog6.jpg',
      url: '#',
    },
    // Add more blogs with appropriate categories...
  ];

  selectedCategory: string | null = null;

  constructor() {}

  filterBlogs(category: string | null) {
    this.selectedCategory = category;
  }

  get filteredBlogs() {
    if (this.selectedCategory) {
      return this.blogs.filter(blog => blog.category === this.selectedCategory);
    }
    return this.blogs;
  }
}
