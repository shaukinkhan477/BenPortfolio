import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Blog } from 'src/app/shared/models/blog.model';
import { BlogService } from 'src/app/shared/services/blog.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ModalService } from 'src/app/shared/services/modal.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  blog?: Blog;
  relatedBlogs: Blog[] = [];

  comments: { author: string; content: string; date: Date }[] = [];
  newComment: string = '';
  private subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    const blogSubscription = this.blogService.getBlogById(id).subscribe((blog) => {
      this.blog = blog;

      if (this.blog) {
        this.fetchRelatedBlogs();
      } else {
        // Handle the case when the blog is not found
        this.router.navigate(['/blog']); // Redirect to the blog list or show an error message
      }
    });

    this.subscriptions.add(blogSubscription);

     window.scrollTo(0, 0);

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  fetchRelatedBlogs() {
    if (this.blog) {
      const relatedBlogsSubscription = this.blogService.getBlogs().subscribe((allBlogs) => {
        this.relatedBlogs = allBlogs.filter(
          (b) => b.category === this.blog!.category && b.id !== this.blog!.id
        );
      });

      this.subscriptions.add(relatedBlogsSubscription);
    }
  }


  backToAllBlogs() {
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
