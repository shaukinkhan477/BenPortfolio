import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-my-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-team.component.html',
  styleUrl: './my-team.component.css'
})
export class MyTeamComponent implements OnInit, AfterViewInit {

  @ViewChildren('teamMember') teamMemberEls!: QueryList<ElementRef>;

  aboutUs = 'We handcraft unique design & digital experiences to meet your commitments.';

  teamMembers = [
    {
      teamMember: '1',
      name: 'Ben',
      role: 'Senior Angular Consultant',
      imageUrl: '/assets/images/myTeamImages/teamMember1Image.jpg',
      link: '#'
    },
    {
      teamMember: '2',
      name: 'Arkni',
      role: 'JavaScript Architect',
      imageUrl: '/assets/images/myTeamImages/teamMember2Image.jpg',
      link: '#'
    },
    {
      teamMember: '3',
      name: 'Chadi',
      role: 'Project Owner: Figma',
      imageUrl: '/assets/images/myTeamImages/teamMember3Image.jpg',
      link: '#'
    },
    {
      teamMember: '4',
      name: 'Lakbir',
      role: 'Fullstack Consultant ',
      imageUrl: '/assets/images/myTeamImages/teamMember4Image.jpg',
      link: '#'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
    }
  }

  private initAnimations(): void {
    const members = this.teamMemberEls.map(el => el.nativeElement);

    gsap.from(members, {
     opacity: 0,
      y: 50,
      duration: 4,
      stagger: 0.3,
      ease: 'elastic.out(1, 0.3)',
      scrollTrigger: {
        trigger: '.team-section',
        start: 'top 80%'
      }
    });
  }

}
