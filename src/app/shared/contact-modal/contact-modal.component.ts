// Contact-modal.component.ts

import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IAboutMe } from '../models/about-me-interface';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.css'
})
export class ContactModalComponent implements OnInit, AfterViewInit {

  isModalVisible = false;

  /**
   * An object that represents the 'About Me' section of the application.
   * This includes the heading, the user's profession, and two paragraphs of text about the user.
   */
  aboutMe: IAboutMe = {
    heading: 'About Me',
    profession: 'Senior Web FrontEnd Consultant (Angular)',
    aboutMePara1: 'I m Ben, a Senior Angular Consultant with 10+ years of experience. I love working with web technologies and crafting interactive and responsive user interfaces',
    aboutMePara2: 'I like to solve design problems, create user-friendly interfaces, and develop rich web experiences & applications.'
  }

  /**
   * A reference to the modal container element in the template.
   * This allows the component to access the modal element and listen for click events outside the modal content.
   */
  @ViewChild('contactModal') contactModal!: ElementRef;

  constructor(private modalService: ModalService, private renderer: Renderer2) {}

  /**
   * Subscribes to the `showModal$` observable from the `ModalService` and updates the `isModalVisible` property based on the emitted value.
   * This ensures that the modal visibility state is synchronized between the component and the service.
   */
  ngOnInit(): void {
    // Subscribe to the modal visibility observable
    this.modalService.showModal$.subscribe((isVisible: boolean) => {
      this.isModalVisible = isVisible;
    });
  }

  /**
   * Listens for clicks outside the modal content and hides the modal if the click target is the modal container.
   */
  ngAfterViewInit(): void {
    // Now you can access the modal element using ViewChild
    this.renderer.listen('window', 'click', (event: Event) => {
      const target: HTMLElement = event.target as HTMLElement;
      const modalContainer: any = this.contactModal?.nativeElement;
      // Check if the target is the modal container and not the content inside it
      if (target === modalContainer && this.isModalVisible) {
        this.hideModal();
      }
    });
  }

  /**
   * Hides the contact modal and notifies the modal service to close the modal.
   */
  hideModal(): void {
    this.isModalVisible = false;
    this.modalService.closeModal();
  }
}
