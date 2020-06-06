import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/interfaces/interfaces';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  map: null;

  markers: Marker[] = [
    {
      position: {
        lat: 25.448044,
        lng: -100.164454,
      },
      title: 'Oficina'
    },
    {
      position: {
        lat: 25.446105,
        lng: -100.164445,
      },
      title: 'Primer Sembradio'
    },
    {
      position: {
        lat: 25.440156,
        lng: -100.168414,
      },
      title: 'Segundo Sembradio'
    },
  ];

  constructor() { }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: 25.448057, lng: -100.164454};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

  ngOnInit() {
    this.loadMap();
  }

}
