<template>


    <div class="Window">
      <div class="NavbarRWD navbarRWDHide"></div>
      <div class="Background"></div>


      <div class="Content">
        <div class="BG_space"></div>
        <div class="Bf_Content">
        
          <div class="Navbar navbarHide"></div>
          

          <div class="BfPage FindStationPage" id="FindStationPage">
            <div class="FindStationCover">
              
            </div>
            <div class="FindStationBar">
              <div class="stationStep"></div>
              <div class="FindStation_list"></div>
              <div class="FindStation_searchBar"></div>
            </div>


            <div class="FindStationMap" id="FindStationMap"></div>

          </div>
        </div>

      </div>
      
    </div>
    <div class="footer">

    </div>



</template>

<script>

import jsSHA from "jssha"   

// import FindStation_page from "./components/FindStation_page.vue"

function getAuthorizationHeader() {

 
  //  填入自己 ID、KEY 開始
  let AppID = "2d9b9a569dab44dfbf33035ed2846ac6";
  let AppKey = "0Ly8nNY_Mw4fL3dcFmKXx4y1mZo";
  //  填入自己 ID、KEY 結束
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
}




export default {

  components:{

  // 'find-station-page':FindStation_page


  },
  data(){

    return{

      TPXData:[],
      nowPage:'',
      navbarRWDHide: true

      

    }


  },computed:{


    // PageNow(){


    //     if(this.nowPage == 'Search'){

    //       this.navbarRWDHide = true

    //     }

    //     return this.nowPage
    // }


  }
  ,methods:{

    

    getdata(){

      let num =  30


      let Url = `https://ptx.transportdata.tw/MOTC/v2/Bike/Station/Taichung?$top=${num}&$format=JSON`



      console.log(Url);

      this.axios.get(
        Url
        ,{
            headers: getAuthorizationHeader()
        }
      )
      .then((response) => {

      
        this.TPXData = response.data  

        console.log(this.TPXData);

        
      })

 

      
    }
    

    

  }
  


};
</script>



<style>
@import url("./assets/css/style.css");

</style>
