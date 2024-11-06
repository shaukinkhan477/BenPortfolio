import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookConsultationModalComponent } from './book-consultation-modal.component';

describe('BookConsultationModalComponent', () => {
  let component: BookConsultationModalComponent;
  let fixture: ComponentFixture<BookConsultationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookConsultationModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookConsultationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
