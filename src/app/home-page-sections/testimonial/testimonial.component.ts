import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {

  testimonials = [
    {
      image: '/assets/images/clientsImages/testimonial-2.jpg',
      name: 'John Doe',
      city: 'New York',
      country: 'USA',
      feedback: 'This team is amazing. They provided me with excellent service and their expertise in Angular is unmatched!'
    },
    {
      image: '/assets/images/clientsImages/testimonial-1.jpg',
      name: 'Jane Smith',
      city: 'London',
      country: 'UK',
      feedback: 'Their attention to detail is incredible. I highly recommend them to anyone looking for professional development services.'
    },
    {
      image: '/assets/images/clientsImages/testimonial-3.jpg',
      name: 'Samuel Johnson',
      city: 'Sydney',
      country: 'Australia',
      feedback: 'They took my project to the next level and delivered a top-notch solution!'
    }
  ];

}
