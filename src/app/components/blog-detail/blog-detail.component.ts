import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Blog } from 'src/app/shared/models/blog.model';
import { BlogService } from 'src/app/shared/services/blog.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ModalService } from 'src/app/shared/services/modal.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    FormsModule,
    MatIconModule,
    RouterLink, // Ensure RouterLink is imported
  ],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  blog?: Blog;
  relatedBlogs: Blog[] = []; // Add this line

  comments: { author: string; content: string; date: Date }[] = [];
  newComment: string = '';

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.blog = this.blogService.getBlogById(id);

    if (this.blog) {
      this.fetchRelatedBlogs();
    }
  }

  fetchRelatedBlogs() {
    if (this.blog) {
      const allBlogs = this.blogService.getBlogs();
      this.relatedBlogs = allBlogs.filter(
        (b) => b.category === this.blog!.category && b.id !== this.blog!.id
      );
    }
  }

  goBack() {
    this.router.navigate(['/blog']);
  }

  onLike() {
    if (this.blog) {
      this.blog.likes = (this.blog.likes || 0) + 1;
    }
  }

  onDislike() {
    if (this.blog) {
      this.blog.dislikes = (this.blog.dislikes || 0) + 1;
    }
  }

  share() {
    if (navigator.share && this.blog) {
      navigator
        .share({
          title: this.blog.title,
          text: this.blog.excerpt,
          url: window.location.href,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch((err) => console.log('Error copying to clipboard', err));
    }
  }

  addComment() {
    if (this.newComment.trim()) {
      this.comments.push({
        author: 'Anonymous', // Replace with actual user data if available
        content: this.newComment.trim(),
        date: new Date(),
      });
      this.newComment = '';
    }
  }
}
