import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GoogleTagManagerService {

  constructor() { }

  public loadGTM() {
    const gtmId = environment.googleTagManagerId;  // Access GTM ID from environment
    if (!gtmId) {
      console.error('Google Tag Manager ID is missing!');
      return;
    }
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(gtmScript);
  }
}
