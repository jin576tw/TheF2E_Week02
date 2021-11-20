<template>
     <div class="StationSearchContent">
        
        <div class="SearchStation_title">
            <h1>尋找站點</h1>
            <h3>找到離您最近的自行車租借站</h3>
        </div>


        <div class="AutoPosition">
    
            <h3>開啟自動定位</h3>
            <div class="AutoPosition_btn">
                <div class="btn_switch"></div>
            </div>

        </div>

        <div class="StationInput">
            <h3>手動輸入地址</h3>
            <input name="Station_name" placeholder="請輸入地址">
        </div>
        <div class="StationInput">
            <h3>站名關鍵字</h3>
            <input name="Station_key" placeholder="請輸入站名關鍵字">
        </div>
        <div class="FindStaion_BtnWarp">
            <button class="FindStaion_Btn" @click="this.$emit('switch-search-page')">{{ isSearchPage}}</button>
        </div>
        

    </div>
</template>

<script>
export default {
    
    props:['isSearchPage'],

    emits:['switch-search-page']
}
</script>