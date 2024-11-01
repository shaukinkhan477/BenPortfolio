import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule,  } from '@angular/router';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  footerLogo = '/assets/images/logo/benLogo2.png'

  constructor(public modalService: ModalService, private router: Router) { }
  
   // Open the "Get in Touch" modal
  openGetInTouchModal() {
    this.modalService.openModal();  // Call the service to show the modal
  }

}
