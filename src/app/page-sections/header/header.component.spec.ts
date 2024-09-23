// header.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ModalService } from '../../shared/modal.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let modalService: ModalService;

  beforeEach(() => {
    const modalServiceMock = jasmine.createSpyObj('ModalService', ['openModal']);

    TestBed.configureTestingModule({
      imports: [HeaderComponent, CommonModule],
      providers: [
        { provide: ModalService, useValue: modalServiceMock },
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(ModalService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should open the modal when openGetInTouchModal is called', () => {
    component.openGetInTouchModal();
    expect(modalService.openModal).toHaveBeenCalled();
  });

  describe('onWindowScroll', () => {
    let socialIcons: HTMLElement;

    beforeEach(() => {
      socialIcons = document.createElement('div');
      socialIcons.id = 'social-icons';
      document.body.appendChild(socialIcons);
    });

    afterEach(() => {
      socialIcons.remove();
    });

    it('should add fixed classes when window is scrolled down', () => {
      Object.defineProperty(window, 'scrollY', {
        configurable: true,
        writable: true,
        value: 60
      });
      component.onWindowScroll();
      expect(socialIcons.classList).toContain('fixed');
    });

    it('should remove fixed classes when window is scrolled up', () => {
      Object.defineProperty(window, 'scrollY', {
        configurable: true,
        writable: true,
        value: 30
      });
      component.onWindowScroll();
      expect(socialIcons.classList).toContain('items-center');
    });

    it('should not execute if not in browser environment', () => {
      // Store the original isPlatformBrowser function
      const originalIsPlatformBrowser = isPlatformBrowser;

      // Mock the isPlatformBrowser function to return false
      (isPlatformBrowser as jasmine.Spy).and.callFake(() => false);

      // Set scrollY directly
      Object.defineProperty(window, 'scrollY', {
        configurable: true,
        writable: true,
        value: 60
      });

      component.onWindowScroll();

      // Verify that no 'fixed' class was added
      expect(socialIcons.classList).not.toContain('fixed');

      // Restore the original isPlatformBrowser function
      (isPlatformBrowser as jasmine.Spy).and.callFake(originalIsPlatformBrowser);
    });

  });

  describe('ngAfterViewInit', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <button id="get-in-touch-btn">Get in Touch</button>
        <div id="contact-modal" class="hidden"></div>
        <button id="close-modal">Close</button>
      `;
      component.ngAfterViewInit();
    });

    it('should add click event listeners to buttons and modal', () => {
      const getInTouchBtn = document.getElementById('get-in-touch-btn');
      const modal = document.getElementById('contact-modal');

      // Simulate click on "Get in Touch" button
      getInTouchBtn?.click();
      expect(modal?.classList).not.toContain('hidden');
      expect(modal?.classList).toContain('flex');

      // Simulate click on "Close" button
      const closeModalBtn = document.getElementById('close-modal');
      closeModalBtn?.click();
      expect(modal?.classList).toContain('hidden');
      expect(modal?.classList).not.toContain('flex');
    });

    it('should close modal when clicking outside of it', () => {
      const modal = document.getElementById('contact-modal')!;
      modal.classList.remove('hidden'); // Ensure modal is visible

      const event = new MouseEvent('click', { bubbles: true });
      window.dispatchEvent(event); // Click outside
      expect(modal.classList).toContain('hidden');
      expect(modal.classList).not.toContain('flex');
    });

    it('should not close modal when clicking inside modal content', () => {
      const modal = document.getElementById('contact-modal')!;
      modal.classList.remove('hidden'); // Ensure modal is visible

      const insideClickEvent = new MouseEvent('click', { bubbles: true });
      modal.dispatchEvent(insideClickEvent); // Click inside
      expect(modal.classList).not.toContain('hidden');
      expect(modal.classList).toContain('flex');
    });

    it('should handle multiple clicks on buttons', () => {
      const getInTouchBtn = document.getElementById('get-in-touch-btn');
      const modal = document.getElementById('contact-modal');

      // Simulate multiple clicks
      for (let i = 0; i < 5; i++) {
        getInTouchBtn?.click();
      }
      expect(modal?.classList).toContain('flex');

      // Close modal
      const closeModalBtn = document.getElementById('close-modal');
      closeModalBtn?.click();
      expect(modal?.classList).toContain('hidden');

      // Click again to reopen
      getInTouchBtn?.click();
      expect(modal?.classList).toContain('flex');
    });
  });
});
