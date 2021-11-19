<template>
  <section class="FindStaion_Page">
    <div class="FindStaion_cover"></div>
    <div class="FindStaion_bar">

      <find-staion-list></find-staion-list>
      
    </div>
    <div class="FindStaion_map" id="FindStaion_map"></div>
  </section>
</template>

<script>

  import FindStaion_list from './FindStaion_list.vue'
  export default {


    components:{

      "find-staion-list":FindStaion_list



    }



  }

</script>
