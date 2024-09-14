import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    address: 'Nantes, Pays de la Loire, France',
    phoneNo: '+33 4555 666 00',
    email: 'benyakoub.pro@gmail.com',
  };
}
