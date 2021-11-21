<template>
     <div class="FindStationMap" :class="{StationMapMove:isSearchPage}"  >

         <div class="StationMap" id="FindStationMap"></div>
  
     </div>
</template>

<script>


import 'leaflet/dist/leaflet.css';
import L from 'leaflet';



export default {
    
     props:['isSearchPage'],
    

     data(){

         return{

           
         }

     },
     mounted(){

         let FindStationMap = L.map("FindStationMap").setView([51.959, -8.623], 12);

         L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiamluNTc2dHciLCJhIjoiY2t3NHRiYmwwMDBzcTJ2bDVhdXJtamtiZyJ9.bcvjSs1IV6lefriuyoNtiQ'
        }).addTo(FindStationMap);

        L.marker([51.5, -0.09]).addTo(FindStationMap)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

        // // 標記 icon
        // let marker = L.marker([51.5, -0.09]).addTo(FindStationMap)
        // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        // .openPopup();

        




     }



}
</script>