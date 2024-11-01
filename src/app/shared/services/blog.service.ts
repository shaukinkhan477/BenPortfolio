import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})

export class BlogService {

private blogs:Blog[] = [
    {
      id: 1,
      title: 'Best Angular Practices for Performance Optimization',
      category: 'Angular',
      excerpt: 'Learn how to optimize your Angular applications with advanced techniques that reduce load times and enhance user experience.',
      imageUrl: '/assets/images/blogImages/blog1.jpg',
      url: '#',
    heading1: "Heading 1",
      heading1Content: "Content of Heading 1",
      heading2: "Heading 2",
      heading2Content: "Content of Heading 2",
      heading3: "Heading 3",
      heading3Content: "Content of Heading 3",
      summary: "Summary",
      blogSummary: "Summary of Blog",
    },
    {
      id: 2,
      title: 'Building Scalable Single Page Applications with Angular',
      category: 'Angular',
      excerpt: 'Explore strategies to design scalable and maintainable SPAs using Angular’s component-based architecture.',
      imageUrl: '/assets/images/blogImages/blog2.jpg',
      url: '#',
     heading1: "Heading 1",
      heading1Content: "Content of Heading 1",
      heading2: "Heading 2",
      heading2Content: "Content of Heading 2",
      heading3: "Heading 3",
      heading3Content: "Content of Heading 3",
      summary: "Summary",
      blogSummary: "Summary of Blog",
    },
    {
      id: 3,
      title: 'State Management in Angular: NgRx vs Services',
      category: 'Development',
      excerpt: 'A deep dive into managing state in Angular applications using NgRx and service-based architecture.',
      imageUrl: '/assets/images/blogImages/blog3.jpg',
      url: '#',
     heading1: "Heading 1",
      heading1Content: "Content of Heading 1",
      heading2: "Heading 2",
      heading2Content: "Content of Heading 2",
      heading3: "Heading 3",
      heading3Content: "Content of Heading 3",
      summary: "Summary",
      blogSummary: "Summary of Blog",
    },
  {
    id: 4,
    title: 'Migrating Legacy Systems to Angular',
    category: 'Development',
    excerpt: 'How to plan and execute a successful migration from legacy web systems to Angular, ensuring minimal disruption.',
    imageUrl: '/assets/images/blogImages/blog4.jpg',
    url: '#',
    heading1: "Heading 1",
      heading1Content: "Content of Heading 1",
      heading2: "Heading 2",
      heading2Content: "Content of Heading 2",
      heading3: "Heading 3",
      heading3Content: "Content of Heading 3",
      summary: "Summary",
      blogSummary: "Summary of Blog",
  },
    {
      id: 5,
      title: 'Optimizing Web Architectures for Angular Applications',
      category: 'Web Architecture',
      excerpt: 'Understand the key architectural patterns and techniques that lead to optimized, high-performance Angular apps.',
      imageUrl: '/assets/images/blogImages/blog5.jpg',
      url: '#',
      heading1: "Heading 1",
      heading1Content: "Content of Heading 1",
      heading2: "Heading 2",
      heading2Content: "Content of Heading 2",
      heading3: "Heading 3",
      heading3Content: "Content of Heading 3",
      summary: "Summary",
      blogSummary: "Summary of Blog",
    },
    {
      id: 6,
      title: 'Angular Component Communication: Best Practices',
      category: 'Angular',
      excerpt: 'Master communication between components in Angular using various methods, including Input, Output, and shared services.',
      imageUrl: '/assets/images/blogImages/blog6.jpg',
      url: '#',
      heading1: "Heading 1",
      heading1Content: "Content of Heading 1",
      heading2: "Heading 2",
      heading2Content: "Content of Heading 2",
      heading3: "Heading 3",
      heading3Content: "Content of Heading 3",
      summary: "Summary",
      blogSummary: "Summary of Blog",
    },
    // Add more blogs with appropriate categories...
  ];


  getBlogs(): Blog[] {
    return this.blogs;
  }

  getBlogById(id: number): Blog | undefined {
    return this.blogs.find(blog => blog.id === id);
  }

  }
