import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { ModalService } from '../modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.css'
})
export class ContactModalComponent implements OnInit, AfterViewInit {

  isModalVisible = false;

  aboutMe: any = {
    heading: 'About Me',
    profession: 'Senior Web FrontEnd Consultant (Angular)',
    aboutMePara1: 'I m Ben, a Senior Angular Consultant. I love working with web technologies and crafting interactive and responsive user interfaces',
    aboutMePara2: 'I like to solve design problems, create user-friendly interfaces, and develop rich web experiences & applications.'
  }

  constructor(private modalService: ModalService, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Subscribe to the modal visibility observable
    this.modalService.showModal$.subscribe(isVisible => {
      this.isModalVisible = isVisible;
    });
  }

  ngAfterViewInit(): void {
    const modalContainer = this.renderer.selectRootElement('#contact-modal', true);

    // Listen for clicks outside the modal content
    this.renderer.listen('window', 'click', (event: Event) => {
      const target = event.target as HTMLElement;
      // Check if the target is the modal container and not the content inside it
      if (target === modalContainer && this.isModalVisible) {
        this.hideModal();
      }
    });
  }

  // Hide modal method
  hideModal() {
    this.isModalVisible = false;
    this.modalService.closeModal();
  }
}
