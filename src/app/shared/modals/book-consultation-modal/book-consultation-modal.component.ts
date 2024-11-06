import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-book-consultation-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-consultation-modal.component.html',
  styleUrl: './book-consultation-modal.component.css'
})
export class BookConsultationModalComponent implements OnInit {
  isOpen = false;
  step: number = 1; // Added step property to track the current step
  @ViewChild('modalBody') modalBody!: ElementRef<HTMLDivElement>;

  // Step 1 fields
  selectedDate: string | null = null;
  selectedTime: string | null = null;
  selectedTimeZone: string | null = null;
  minDate: string = '';

  availableTimes = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM',
    '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  ];

  timeZones: string[] = [
    'UTC−12:00', 'UTC−11:00', 'UTC−10:00', 'UTC−09:00',
    'UTC−08:00', 'UTC−07:00', 'UTC−06:00', 'UTC−05:00',
    'UTC−04:00', 'UTC−03:00', 'UTC−02:00', 'UTC−01:00',
    'UTC±00:00', 'UTC+01:00', 'UTC+02:00', 'UTC+03:00',
    'UTC+04:00', 'UTC+05:00', 'UTC+05:30', 'UTC+06:00',
    'UTC+07:00', 'UTC+08:00', 'UTC+09:00', 'UTC+10:00',
    'UTC+11:00', 'UTC+12:00', 'UTC+13:00', 'UTC+14:00',
  ];

  // Step 2 fields
  name: string = '';
  email: string = '';
  guestEmails: string = '';
  message: string = '';

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    // Set minDate to today's date in YYYY-MM-DD format
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    this.minDate = `${year}-${month}-${day}`;

    // Subscribe to the modal state from the service
    this.modalService.getBookConsultationModalState().subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }

  selectTime(time: string) {
    this.selectedTime = time;
  }

  private scrollModalBodyToTop() {
    if (this.modalBody && this.modalBody.nativeElement) {
      this.modalBody.nativeElement.scrollTop = 0;
    }
  }

  // Method to go to the next step
  nextStep() {
    if (this.step === 1) {
      this.step = 2;
      this.scrollModalBodyToTop();
    }
  }

  // Method to go back to the previous step
  previousStep() {
    if (this.step === 2) {
      this.step = 1;
      this.scrollModalBodyToTop();
    }
  }

  // Method to schedule the event (final confirmation)
  scheduleEvent() {
    // Implement booking logic here (e.g., send data to server)
    alert(
      `Consultation scheduled on ${this.selectedDate} at ${this.selectedTime} (${this.selectedTimeZone})\n` +
      `Name: ${this.name}\nEmail: ${this.email}\nGuests: ${this.guestEmails}\nMessage: ${this.message}`
    );
    this.closeModal();
  }

  closeModal() {
    this.modalService.closeBookConsultationModal();
    // Reset all fields when modal is closed
    this.step = 1;
    this.selectedDate = null;
    this.selectedTime = null;
    this.selectedTimeZone = null;
    this.name = '';
    this.email = '';
    this.guestEmails = '';
    this.message = '';
  }
}
