import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private showModalSubject = new Subject<boolean>();

  showModal$ = this.showModalSubject.asObservable();

  // BehaviorSubject to hold the state of the Book Consultation modal
  private isBookConsultationOpen = new BehaviorSubject<boolean>(false);

  constructor() {}

// Method to open the Book Get In Touch modal
  openModal(): void {
    this.showModalSubject.next(true);
  }

// Method to open the Book Get In Touch modal
  closeModal(): void {
    this.showModalSubject.next(false);
  }

// Method to open the Book Consultation modal
  openBookConsultationModal() {
    this.isBookConsultationOpen.next(true);
  }

  // Method to close the Book Consultation modal
  closeBookConsultationModal() {
    this.isBookConsultationOpen.next(false);
  }

  // Observable for components to subscribe to the modal's state
  getBookConsultationModalState(): Observable<boolean> {
    return this.isBookConsultationOpen.asObservable();
  }
}
