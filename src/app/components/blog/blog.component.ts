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
  private searchSubject = new Subject<string>();
  private subscription = new Subscription();

  constructor(private blogService: BlogService) {
    this.blogs = this.blogService.getBlogs();
  }

  ngOnInit() {
    this.filteredBlogs = this.blogs;

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
    let filtered = this.blogs;

    if (this.selectedCategory) {
      filtered = filtered.filter((blog) => blog.category === this.selectedCategory);
    }

    if (this.searchQuery && this.searchQuery.trim() !== '') {
      const query = this.searchQuery.trim().toLowerCase();
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.excerpt.toLowerCase().includes(query)
        // Add other fields if needed
      );
    }

    this.filteredBlogs = filtered;
  }

  isActiveCategory(category: string | null): boolean {
    return this.selectedCategory === category;
  }

  clearSearch() {
    this.searchQuery = '';
    this.applyFilters();
  }
}
