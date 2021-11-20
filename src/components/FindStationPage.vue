<template>
    <div class="BfPage FindStationPage" id="FindStationPage">

            <div class="FindStationCover">
              
            </div>

            <div class="FindStation_SearchWarp">

              <div class="FindStationBar" >

                <div class="StationStep"></div>

                <div class="StationSearchContent" >

                  <button class="FindStaion_Btn" @click="SearchStation"></button>

                </div>
                <div class="StationList" ></div>
                
              </div>
            
              <div class="FindStationMap" id="FindStationMap"></div>

             
            
            </div>
            

          </div>
</template>

<script>

export default {



    data(){


        return{
            searchPage:false,
        }


    },
    methods:{


        SearchStation(){

        this.searchPage = ! this.searchPage

        console.log( this.searchPage);

        },

    }

    
}
</script>