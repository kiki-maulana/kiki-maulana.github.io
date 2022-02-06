// Map
function resetMap() {
    map.fitBounds([[-37.701909,144.945919],[-37.663575,145.018432]]);
}

var map = L.map('dynamicMap', {
    zoomControl:false,
    dragging: false,
    maxZoom:28,
    minZoom:15,
    zoom: 15,
}).fitBounds([[-37.701909,144.945919],[-37.663575,145.018432]]);

// var osm = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWlibnVoaWJiYW4iLCJhIjoiY2t0MnFrdzV0MDBjNDJwbnVlNmJ3Y2NmNCJ9.lJEGIrG0F9cIDLzJSlyDRw', {
//     maxZoom: 14,
//     attribution: 'OpenStreetMap',
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
// })
// var gmaps = L.tileLayer('http://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
//     attribution: 'Google Maps',
//     attributionsCollapsible:false,
// })
var darkLayer = L.tileLayer('http://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
    attribution: '',
    attributionsCollapsible:false,
})
// let BING_KEY = 'Ai5uhJ7V8w8cnyoDBY5tt_A5b-2343USu4G4vwhs_JTZGp3yQEDoJqrLBk1bcO-f'
// var bing = L.tileLayer.bing({
//     bingMapsKey: BING_KEY,
//     imagerySet: 'CanvasDark',
// }).addTo(map)

darkLayer.addTo(map)
map.scrollWheelZoom.disable();
// map.on('zoomend', function() {
//     L.bounds(map.getBounds())
// });

// map.on('dragend', function() {
//     L.bounds(map.getBounds())
// });
let data = `./data/1966.kml`
let beforeMap
fechKML('map', data)
// fechKML('map2', data2)
function fechKML(type, data, before) {
    if (before) {
        map.removeLayer(before)
    }
    // Load kml file
    fetch(data)
    .then(res => res.text())
    .then(kmltext => {
        // Create new kml overlay
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmltext, 'text/xml');
        const track = new L.KML(kml);
        if (type === 'map') {
            beforeMap = track
        }
        map.addLayer(track);

        // // Adjust map to show the kml
        // const bounds = track.getBounds();
        // map.fitBounds(bounds);
    });
}

initMarked()
function initMarked() {
    fetch('./content.md')
    .then(res => res.text())
    .then(res => {
        let htmlContent = marked.parse(res, {
            sanitize: true
        })
        document.getElementById('content').innerHTML = htmlContent
    })
}

// $('[name="mapType"]').on('change', function(e) {
//     let type = e.target.value
//     if (type === 'OSM') {
//         map.removeLayer(gmaps)
//         map.removeLayer(bing)
//         osm.addTo(map)
//     }else if (type === 'Bing') {
//         map.removeLayer(osm)
//         map.removeLayer(gmaps)
//         bing.addTo(map)
//     }else{
//         map.removeLayer(osm)
//         map.removeLayer(gmaps)
//         gmaps.addTo(map)
//     }
// })