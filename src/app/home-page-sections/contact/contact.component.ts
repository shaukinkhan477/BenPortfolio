import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,  AfterViewInit {

  contact = {
    address: 'Nantes, Pays de la Loire, France',
    phoneNo1: '+33 (752) 261-100',
    phoneNo2: '+33 (758) 758-268',
    email1: 'benyakoub.pro@gmail.com',
    email2: 'benyakoub.fr@gmail.com',
  }

  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11'; // Use different styles like 'light-v10', 'dark-v10', etc.
  lng = -1.5536; // Longitude of your location
  lat = 47.2184; // Latitude of your location
  zoom = 12; // Initial zoom level

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // Initialize Mapbox map
      this.map = new mapboxgl.Map({
        accessToken: environment.mapboxAccessToken,
        container: 'map', // The ID of the div element in which the map will be rendered
        style: this.style,
        center: [this.lng, this.lat],
        zoom: this.zoom,
      });

      // Add map controls (zoom, rotate)
      this.map.addControl(new mapboxgl.NavigationControl());

      // Add a marker at your location
      const marker = new mapboxgl.Marker()
        .setLngLat([this.lng, this.lat])
        .addTo(this.map);
    }
  }

  ngAfterViewInit() { }



}
