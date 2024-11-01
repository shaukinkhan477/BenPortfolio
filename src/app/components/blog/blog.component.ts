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
