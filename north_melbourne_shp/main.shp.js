// Map
function resetMap() {
    map.fitBounds([[-37.58703054044867,145.08304595947268],[-37.78156937014927,144.83997344970706]]);
}

var map = L.map('dynamicMap', {
    zoomControl:false,
    dragging: false,
    maxZoom:28,
    minZoom:14.4,
    zoom: 14.4,
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
let data = `./data/shp/1966.zip`
let beforeMap
fetchShp('map', data)
function fetchShp(type, data, before) {
    if (before) {
        map.removeLayer(before)
    }
    // Load shape file
    var shpfile = new L.Shapefile(data, {
        onEachFeature: function(feature, layer) {
            if (feature.properties) {
                layer.bindPopup(Object.keys(feature.properties).map(function(k) {
                    return k + ": " + feature.properties[k];
                }).join("<br />"), {
                    maxHeight: 200
                });
            }
        }
    });
    shpfile.addTo(map);
    shpfile.once("data:loaded", function() {
        console.log("finished loaded shapefile");
    });
    if (type === 'map') {
        beforeMap = shpfile
    }
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