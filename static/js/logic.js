let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"; 
function printFeature(feature) {
	console.log(feature.properties)
}
let myMap = L.map('mapid').setView([0, 0], 0)

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: 'sk.eyJ1IjoiaGpmZWxkeSIsImEiOiJja2tteWxwa3UxaWJlMndxbjZhYzRrYW8xIn0.2B52olQb0cqBMtmXKVkZnQ'
}).addTo(myMap);

d3.json(url, function(data) {
	data.features.forEach(function(feature) {
		console.log(feature)
		let geo= feature.geometry;
		var latLng = L.latLng(geo.coordinates[0], geo.coordinates[1])
		var marker = L.marker(latLng).addTo(myMap);
		marker.bindTooltip(feature.properties.title).openTooltip();
	//	var popup = L.popup()
	//		    .setLatLng(geo.coordinates)
	//		    .setContent(feature.properties.title);
	})
	//features.forEach(feach => console.log(feach))
	//console.log(geo)
})
