import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { ModalService } from '../../shared/modal.service';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {



  constructor(private modalService: ModalService) { }

  // Open the "Get in Touch" modal
  openGetInTouchModal() {
    this.modalService.openModal();  // Call the service to show the modal
  }
}
