import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contact = {
    address: 'Nantes, Pays de la Loire, France',
    phoneNo: '+33 4555 666 00',
    email: 'benyakoub.pro@gmail.com',
  }


  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11'; // Use different styles like 'light-v10', 'dark-v10', etc.
  lng = -1.5536; // Longitude of your location
  lat = 47.2184; // Latitude of your location
  zoom = 12; // Initial zoom level

  ngOnInit(): void {
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
