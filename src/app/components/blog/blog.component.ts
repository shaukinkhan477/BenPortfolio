import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../page-sections/header/header.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  blogs = [
    {
      title: 'My First Blog Post',
      date: 'October 22, 2024',
      content: 'This is the content of my first blog post. Here I share my journey as a developer and my passion for creating beautiful web applications.'
    },
    {
      title: 'Angular Tips & Tricks',
      date: 'October 20, 2024',
      content: 'Angular is an amazing framework, and in this blog, I share some useful tips and tricks that help you become a more efficient Angular developer.'
    }
  ];
}
