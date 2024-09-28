import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-team.component.html',
  styleUrl: './my-team.component.css'
})
export class MyTeamComponent {


  aboutUs = 'We handcraft unique design & digital experiences to meet your commitments.';

  teamMembers = [
    {
      teamMember: '1',
      name: 'Ben',
      role: 'Senior Angular Consultant',
      imageUrl: '/assets/images/teamMember1Image.jpg',
      link: '#'
    },
    {
      teamMember: '2',
      name: 'Arkni',
      role: 'JavaScript Architect',
      imageUrl: '/assets/images/teamMember2Image.jpg',
      link: '#'
    },
    {
      teamMember: '3',
      name: 'Chadi',
      role: 'Project Owner: Figma',
      imageUrl: '/assets/images/teamMember3Image.jpg',
      link: '#'
    },
    {
      teamMember: '4',
      name: 'Lakbir',
      role: 'Fullstack Consultant ',
      imageUrl: '/assets/images/teamMember4Image.jpg',
      link: '#'
    }
  ];

}
