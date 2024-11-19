import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseStudy } from 'src/app/shared/models/case-study.model';
import { CaseStudyService } from 'src/app/shared/services/case-study.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-case-study-detail',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './case-study-detail.component.html',
  styleUrl: './case-study-detail.component.css'
})
export class CaseStudyDetailComponent implements OnInit {
  caseStudy: CaseStudy | undefined;

  constructor(
    private route: ActivatedRoute,
    private caseStudyService: CaseStudyService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.caseStudy = this.caseStudyService.getCaseStudyById(id);
  }

  goBack(): void {
  this.location.back();
}
}
