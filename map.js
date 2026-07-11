// ===============================
// EcoBin Live Map
// ===============================

// Initialize Map
const map = L.map('map').setView([22.5726, 88.3639], 13);

// OpenStreetMap Tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap Contributors',
    maxZoom: 19
}).addTo(map);

// ===============================
// Custom Icons
// ===============================

const greenIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

const yellowIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

const redIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

const blueIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

// ===============================
// Smart Bin Data
// ===============================

const bins = [

{
id:"Bin-101",
lat:22.5735,
lng:88.3645,
fill:25,
status:"Empty",
icon:greenIcon
},

{
id:"Bin-102",
lat:22.5708,
lng:88.3618,
fill:58,
status:"Half Full",
icon:yellowIcon
},

{
id:"Bin-103",
lat:22.5758,
lng:88.3678,
fill:95,
status:"Overflow",
icon:redIcon
},

{
id:"Bin-104",
lat:22.5690,
lng:88.3595,
fill:12,
status:"Empty",
icon:greenIcon
},

{
id:"Bin-105",
lat:22.5718,
lng:88.3695,
fill:71,
status:"Half Full",
icon:yellowIcon
}

];

// Add Markers
bins.forEach(bin=>{

L.marker([bin.lat,bin.lng],{icon:bin.icon})
.addTo(map)
.bindPopup(`
<h3>${bin.id}</h3>
<p><strong>Status:</strong> ${bin.status}</p>
<p><strong>Fill Level:</strong> ${bin.fill}%</p>
<p><strong>Battery:</strong> ${Math.floor(Math.random()*30+70)}%</p>
<p><strong>Temperature:</strong> ${Math.floor(Math.random()*8+25)}°C</p>
`);

});

// ===============================
// Collection Truck
// ===============================

let truck = L.marker([22.5726,88.3639],{
icon:blueIcon
}).addTo(map);

truck.bindPopup("<b>Collection Truck</b><br>Status : Active");

// Animate Truck
let lat=22.5726;
let lng=88.3639;

setInterval(()=>{

lat += (Math.random()-0.5)*0.002;
lng += (Math.random()-0.5)*0.002;

truck.setLatLng([lat,lng]);

},3000);

// ===============================
// Search
// ===============================

const search=document.querySelector(".search input");

if(search){

search.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

bins.forEach(bin=>{

if(bin.id.toLowerCase().includes(value)){

map.setView([bin.lat,bin.lng],16);

}

});

});

}

// ===============================
// Card Animation
// ===============================

document.querySelectorAll(".dashboard-card,.info-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});

// ===============================
// Live Time
// ===============================

setInterval(()=>{

console.log(new Date().toLocaleTimeString());

},1000);

// ===============================
// Welcome Message
// ===============================

setTimeout(()=>{

console.log("EcoBin Live Map Loaded Successfully");

},500);