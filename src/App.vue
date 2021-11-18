<template>
  <div class="Window">
    <section class="Background"></section>
    <section class="Contenet">
      <div class="BG_space"></div>
      <div class="Bf_Contenet">

        <navbar></navbar>

        <div class="Contenet_page">

            <find-station-page></find-station-page>


  
        </div>

      
      </div>
    </section>
  </div>

  <Footer></Footer>
</template>

<script>

import jsSHA from "jssha"   

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

  data(){

    return{

      TPXData:[],
      
      

    }


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
