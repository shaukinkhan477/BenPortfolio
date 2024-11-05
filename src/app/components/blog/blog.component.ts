// src/app/components/blog/blog.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { BlogService } from 'src/app/shared/services/blog.service';
import { Blog } from 'src/app/shared/models/blog.model';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit, OnDestroy {
  blogs: Blog[] = [];
  selectedCategory: string | null = null;
  searchQuery: string = '';
  filteredBlogs: Blog[] = [];
  displayedBlogs: Blog[] = [];
  blogsPerPage: number = 3;
  currentPage: number = 1;
  private searchSubject = new Subject<string>();
  private subscription = new Subscription();

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getBlogs().subscribe((blogs) => {
      this.blogs = blogs;
      this.filteredBlogs = this.blogs;
      this.applyFilters();
      this.updateDisplayedBlogs();
    });

    (error: any) => {
    console.error('Error fetching blogs:', error);
    // Handle the error, show a message to the user, etc.
  }

    this.subscription.add(
      this.searchSubject.pipe(debounceTime(300)).subscribe(() => {
        this.applyFilters();
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSearchQueryChange(query: string) {
    this.searchSubject.next(query);
  }

  filterBlogs(category: string | null) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  applyFilters() {
    if (!this.blogs) {
      return;
    }

    let filtered = this.blogs;

    if (this.selectedCategory) {
      filtered = filtered.filter(
        (blog) => blog.category === this.selectedCategory
      );
    }

    if (this.searchQuery && this.searchQuery.trim() !== '') {
      const query = this.searchQuery.trim().toLowerCase();
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.excerpt.toLowerCase().includes(query)
      );
    }

    this.filteredBlogs = filtered;

    // Reset pagination
    this.currentPage = 1;
    this.updateDisplayedBlogs();
  }

  updateDisplayedBlogs() {
    const startIndex = 0;
    const endIndex = this.currentPage * this.blogsPerPage;
    this.displayedBlogs = this.filteredBlogs.slice(startIndex, endIndex);
  }

  loadMore() {
    this.currentPage++;
    this.updateDisplayedBlogs();
  }

  isActiveCategory(category: string | null): boolean {
    return this.selectedCategory === category;
  }

  clearSearch() {
    this.searchQuery = '';
    this.applyFilters();
  }
}
