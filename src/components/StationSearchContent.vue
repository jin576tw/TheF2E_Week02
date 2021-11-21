<template>
     <div class="StationSearchContent">
        
        <div class="SearchStation_title">
            <h1>尋找站點</h1>
            <h3>找到離您最近的自行車租借站</h3>
        </div>


        <div class="AutoPosition">
    
            <h3>開啟自動定位</h3>
            <div class="AutoPosition_btn" :class="{active_position_btn:isSwitchActive}" @click="this.$emit('switch-active')">
                <div class="btn_switch" :class="{active_switch:isSwitchActive}"></div>
            </div>

        </div>

        <div class="StationInput">
            <h3>手動輸入地址</h3>
            <input name="Station_name" placeholder="請輸入地址" v-model=" enterStationName">
        </div>
        <div class="StationInput">
            <h3>站名關鍵字</h3>
            <input name="Station_key" placeholder="請輸入站名關鍵字"  v-model="enterStationKey">
        </div>
        <div class="FindStaion_BtnWarp">
            <button class="FindStaion_Btn" @click="SendStationKeyname">{{ isSearchPage}}</button>
        </div>
        

    </div>
</template>

<script>
export default {
    
    props:['isSearchPage','isSwitchActive'],

    emits:['switch-active'],

    data(){
        return{

            enterStationName:'',
            enterStationKey:''


        }
    
    },
    
    methods:{

        SendStationKeyname(){

            this.$emit(
                'send-station-keyname',
                this.enterStationName,
                this.enterStationKey
            )

        }



    }
}
</script>