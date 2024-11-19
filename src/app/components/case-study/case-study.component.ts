import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaseStudy } from 'src/app/shared/models/case-study.model';
import { CaseStudyService } from 'src/app/shared/services/case-study.service';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.css'
})
export class CaseStudyComponent implements OnInit {

  projects: CaseStudy[] = [];

  constructor(private caseStudyService: CaseStudyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.projects = this.caseStudyService.getCaseStudies();
  }

  openCaseStudyDetail(id: number): void {
      window.scrollTo(0, 0);
    this.router.navigate(['/case-study', id]);
  }
}
