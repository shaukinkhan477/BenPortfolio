import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Blog } from 'src/app/shared/models/blog.model';
import { BlogService } from 'src/app/shared/services/blog.service';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { ModalService } from 'src/app/shared/services/modal.service';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, FooterComponent, RouterLink,HeaderComponent, FormsModule, MatIconModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit {

  comments: { author: string; content: string; date: Date }[] = [];
  newComment: string = '';

    blog?: Blog;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.blog = this.blogService.getBlogById(id);
  }

  onLike() {
    if (this.blog) {
      this.blog.likes = (this.blog.likes || 0) + 1;
      // Optionally, update the blog in the service or backend
    }
  }

  onDislike() {
    if (this.blog) {
      this.blog.dislikes = (this.blog.dislikes || 0) + 1;
      // Optionally, update the blog in the service or backend
    }
  }

  share() {
    if (navigator.share && this.blog) {
      navigator.share({
        title: this.blog.title,
        text: this.blog.excerpt,
        url: window.location.href,
      })
        .then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support the share API
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch(err => console.log('Error copying to clipboard', err));
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
