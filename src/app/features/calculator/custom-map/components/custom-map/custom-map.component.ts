import { Component } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-draw';
import 'leaflet/dist/leaflet.css';
import { CustomTileLayer } from '../../classes/custom-tile-layer';
import { MapSource } from '../../enums/map-source.enum';


@Component({
  selector: 'app-custom-map',
  templateUrl: './custom-map.component.html',
  styleUrl: './custom-map.component.scss',
})
export class CustomMapComponent {
  private map!: L.Map;
  private markers: L.Marker[] = [
    L.marker([43.15306, 22.58611], { title: 'Lokacija', draggable: true }), // Pirot
  ];

  private source: MapSource = MapSource.Custom;

  private readonly pirotCentar: L.LatLng = new L.LatLng(43.15306, 22.58611);
  private tileLayerOptions: L.TileLayerOptions = {
    maxZoom: 7,
    minZoom: 0,
    errorTileUrl: 'assets/tiles/01/X00000Y00000.jpg',
  };
  private basemap = 'assets/tiles/0{z+1}/X0000{x}Y00000.jpg';

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.initializeMap();
    this.addEditableLayers();
    this.initMarkers();
    this.centerMap();
  }

  private initializeMap() {

    this.map = L.map('map');
    this.setMapTiles();

    // this.map.addEventListener('click', (e) => {
    //   console.log(e.latlng);
    //   const m = L.marker([e.latlng.lat, e.latlng.lng]);
    //   this.addMarker(m);
    // });
  }

  private setMapTiles() {
    let t;
    switch (this.source) {
      case MapSource.OpenStreet:
        this.basemap = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        t = new L.TileLayer(this.basemap).addTo(this.map);
        break;
      case MapSource.Custom:
        this.basemap = 'assets/tiles/0{z+1}/X0000{x}Y00000.jpg';
        t = new CustomTileLayer(this.basemap, this.tileLayerOptions).addTo(this.map);
        break;
      case MapSource.Gmaps:
        break;
    }
  }

  private initMarkers() {
    this.markers.forEach((marker) => marker.addTo(this.map).on('dragend', () => {
      var coord = String(marker.getLatLng()).split(',');
      console.log(coord);
      var lat = coord[0].split('(');
      var lng = coord[1].split(')');
      marker.bindPopup("Moved to: " + lat[1] + ", " + lng[0] + ".");
      console.log(this.markers);
    }));
  }

  private addMarker(m: L.Marker) {
    this.markers.forEach((marker) => this.map.removeLayer(marker));
    this.markers = [...this.markers, m];
    this.initMarkers();
  }

  private centerMap() {
    // Create a LatLngBounds object to encompass all the marker locations
    //const bounds = L.latLngBounds(this.markers.map(marker => marker.getLatLng()));
    this.map.setView(this.markers[0].getLatLng(), 5);

    // Fit the map view to the bounds
    //this.map.fitBounds(bounds);
  }

  private addEditableLayers() {
    var editableLayers = new L.FeatureGroup();
    this.map.addLayer(editableLayers);

    var drawPluginOptions: L.Control.DrawConstructorOptions = {
      position: 'topright',
      draw: {
        polygon: {
          allowIntersection: false, // Restricts shapes to simple polygons
          drawError: {
            color: '#e1e100', // Color the shape will turn when intersects
            message: "<strong>Oh snap!<strong> you can't draw that!", // Message that will show when intersect
          },
          shapeOptions: {
            color: '#97009c',
          },
        },
        // disable toolbar item by setting it to false
        polyline: false,
        circle: false, // Turns off this drawing tool
        rectangle: false,
        marker: false,
      },
      edit: {
        featureGroup: editableLayers, //REQUIRED!!
        remove: false,
      },
    };

    // Initialise the draw control and pass it the FeatureGroup of editable layers
    var drawControl = new L.Control.Draw(drawPluginOptions);
    this.map.addControl(drawControl);

    var editableLayers = new L.FeatureGroup();
    this.map.addLayer(editableLayers);

    this.map.on('draw:created', function (e) {
      var type = e.type,
        layer = e.layer;

      if (type === 'marker') {
        layer.bindPopup('A popup!');
      }
      console.log(layer);

      editableLayers.addLayer(layer);
    });
  }
}

