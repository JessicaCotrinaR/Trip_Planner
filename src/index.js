import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiamVzc2ltYXAiLCJhIjoiY2tmd3FkMjJsMW0xNDJ4dHNuODE5aGdlNSJ9.0g4cONjfbN_aAILd-dmZxQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const element = document.createElement("h1")
const text = document.createTextNode('HELLO WORLD')
element.appendChild(text);

const mapMarker = new mapboxgl.Marker(element).setLngLat([-74.009, 40.705]).addTo(map);

