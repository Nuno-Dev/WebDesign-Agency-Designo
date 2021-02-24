let map_canada = L.map('map-canada', { attributionControl: false }).setView(
  [55, -89],
  3
);

let map_australia = L.map('map-australia', {
  attributionControl: false,
}).setView([-26, 136], 4);

let map_uk = L.map('map-uk', { attributionControl: false }).setView(
  [54, -3],
  5
);

let new_map1 = L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1IjoibnVub2Rldjk2IiwiYSI6ImNrbGk5MzczNTFydmoydW4xcmg2OGVqZTQifQ.f-7XocJD6F8oReFxZSZk9Q',
  }
);
let new_map2 = L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1IjoibnVub2Rldjk2IiwiYSI6ImNrbGk5MzczNTFydmoydW4xcmg2OGVqZTQifQ.f-7XocJD6F8oReFxZSZk9Q',
  }
);
let new_map3 = L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1IjoibnVub2Rldjk2IiwiYSI6ImNrbGk5MzczNTFydmoydW4xcmg2OGVqZTQifQ.f-7XocJD6F8oReFxZSZk9Q',
  }
);

new_map1.addTo(map_canada);
new_map2.addTo(map_australia);
new_map3.addTo(map_uk);

let marker1 = L.marker([43.64403, -79.39451]).addTo(map_canada);

let marker2 = L.marker([-30.32946, 149.78829]).addTo(map_australia);

let marker3 = L.marker([53.7102, -1.34176]).addTo(map_uk);
