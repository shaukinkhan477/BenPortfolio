import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

   isServiceModalVisible = true;

  constructor(private modalService: ModalService) { }

  // Open the "Get in Touch" modal
  openGetInTouchModal() {
    this.modalService.openModal();  // Call the service to show the modal
  }

  closeServiceModal() {
    this.isServiceModalVisible = false; // Close the service modal
  }
}
