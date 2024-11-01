import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { BlogService } from 'src/app/shared/services/blog.service';
import { Blog } from 'src/app/shared/models/blog.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {

   blogs: Blog[] = [];

  selectedCategory: string | null = null;

  constructor(private blogService: BlogService) {
    this.blogs = this.blogService.getBlogs();
  }

  filterBlogs(category: string | null) {
    this.selectedCategory = category;
  }

  get filteredBlogs(): Blog[] {
    if (this.selectedCategory) {
      return this.blogs.filter(blog => blog.category === this.selectedCategory);
    }
    return this.blogs;
  }

  isActiveCategory(category: string | null): boolean {
    return this.selectedCategory === category;
  }
}



  // blogs = [
  //   {
  //     id: 1,
  //     title: 'Best Angular Practices for Performance Optimization',
  //     category: 'Angular',
  //     excerpt: 'Learn how to optimize your Angular applications with advanced techniques that reduce load times and enhance user experience.',
  //     imageUrl: '/assets/images/blogImages/blog1.jpg',
  //     url: '#',
  //   },
  //   {
  //     id: 2,
  //     title: 'Building Scalable Single Page Applications with Angular',
  //     category: 'Angular',
  //     excerpt: 'Explore strategies to design scalable and maintainable SPAs using Angular’s component-based architecture.',
  //     imageUrl: '/assets/images/blogImages/blog2.jpg',
  //     url: '#',
  //   },
  //   {
  //     id: 3,
  //     title: 'State Management in Angular: NgRx vs Services',
  //     category: 'Development',
  //     excerpt: 'A deep dive into managing state in Angular applications using NgRx and service-based architecture.',
  //     imageUrl: '/assets/images/blogImages/blog3.jpg',
  //     url: '#',
  //   },
  //   {
  //     id: 4,
  //     title: 'Migrating Legacy Systems to Angular',
  //     category: 'Development',
  //     excerpt: 'How to plan and execute a successful migration from legacy web systems to Angular, ensuring minimal disruption.',
  //     imageUrl: '/assets/images/blogImages/blog4.jpg',
  //     url: '#',
  //   },
  //   {
  //     id: 5,
  //     title: 'Optimizing Web Architectures for Angular Applications',
  //     category: 'Web Architecture',
  //     excerpt: 'Understand the key architectural patterns and techniques that lead to optimized, high-performance Angular apps.',
  //     imageUrl: '/assets/images/blogImages/blog5.jpg',
  //     url: '#',
  //   },
  //   {
  //     id: 6,
  //     title: 'Angular Component Communication: Best Practices',
  //     category: 'Angular',
  //     excerpt: 'Master communication between components in Angular using various methods, including Input, Output, and shared services.',
  //     imageUrl: '/assets/images/blogImages/blog6.jpg',
  //     url: '#',
  //   },

  // ];
