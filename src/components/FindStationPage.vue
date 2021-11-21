<template>
    <div class="BfPage FindStationPage" id="FindStationPage">

            <div class="FindStationCover" :class="{coverMove:searchPage}">

    
                <div class="FindStationCover_logo animate__animated animate__fadeIn">
                    
                    <div class="logo_pic">
                        <img src="../assets/images/logo_white.png" alt="">
                    </div>
                    <h4>Bike Fun！自行車旅遊網</h4>

                </div>
            </div>

            <div class="FindStation_SearchWarp" :class="{SearchWarpMove:searchPage}">

              <div class="FindStationBar" :class="{StationBarMove:searchPage}">

                <div class="StationStep">
                    <h4>首頁 
                        <div class="stepArrow">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.717491 13.0815C0.522229 13.2768 0.522229 13.5933 0.717491 13.7886C0.912753 13.9839 1.22934 13.9839 1.4246 13.7886L7.78856 7.42464C7.98382 7.22937 7.98382 6.91279 7.78856 6.71753C7.78833 6.7173 7.78809 6.71707 7.78786 6.71683L1.4246 0.353569C1.22934 0.158307 0.912753 0.158307 0.717492 0.353569C0.52223 0.548831 0.52223 0.865414 0.717492 1.06068L6.7279 7.07108L0.717491 13.0815Z" fill="black"/>
                        </svg></div>  
                    </h4>

                    <h4 @click="SearchStation">尋找站點
                        <div class="stepArrow">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.717491 13.0815C0.522229 13.2768 0.522229 13.5933 0.717491 13.7886C0.912753 13.9839 1.22934 13.9839 1.4246 13.7886L7.78856 7.42464C7.98382 7.22937 7.98382 6.91279 7.78856 6.71753C7.78833 6.7173 7.78809 6.71707 7.78786 6.71683L1.4246 0.353569C1.22934 0.158307 0.912753 0.158307 0.717492 0.353569C0.52223 0.548831 0.52223 0.865414 0.717492 1.06068L6.7279 7.07108L0.717491 13.0815Z" fill="black"/>
                        </svg></div>  
                    </h4>
                   
                   
                </div>

                <transition name="fade">

                    <station-list-content v-if="searchPage"
                    
                    ></station-list-content>

                    <station-search-content v-else :is-search-page="searchPage" 
                    :is-switch-active="switchActive"
                    @switch-active="ActiveSwitch"
                    @send-station-keyname="SearchStation"></station-search-content >

                 </transition>
                

              </div>
            

             <find-station-map 
             :is-search-page="searchPage">
             </find-station-map>
             

             
            
            </div>
            

          </div>
</template>




<script>


import StationSearchContent from './StationSearchContent.vue'
import StationListContent from './StationListContent.vue'
import FindStationMap from './FindStationMap.vue'



export default {

    components:{

        'station-search-content':StationSearchContent,
        'station-list-content': StationListContent,  
        'find-station-map':FindStationMap
        
    },
 
    
    data(){

        return{
            
            searchPage : false,

            switchActive : true,

            // 緯度
            positon: [],

            stationName : '',

            stationKey : ''

        
        }


    },
    
    methods:{

        

        ActiveSwitch(){

            this.switchActive = ! this.switchActive

            console.log( this.switchActive);

            if(this.switchActive){

                navigator.geolocation.getCurrentPosition(
                    function (position) {

                         const latitude = position.coords.latitude;  // 緯度

                        const longitude = position.coords.longitude;  // 經度
                       

                        this.position = [latitude,longitude]
                       
                        console.log(latitude,longitude)
                        console.log(this.position)

                        
           

                    }
            )
                
            }

           

        },


       

        SearchStation(name,keyname){


            if(name == '' || keyname == ''){

                alert('請輸入位置')

            }else{


                this.searchPage = ! this.searchPage

                console.log( this.searchPage);

                this.stationName = name

                this.stationKey = keyname

                console.log(this.stationName,this.stationKey)


            }

           

        },

    }

    
}
</script>