import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHighlightsComponent } from './hero-highlights.component';

describe('HeroHighlightsComponent', () => {
  let component: HeroHighlightsComponent;
  let fixture: ComponentFixture<HeroHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroHighlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
