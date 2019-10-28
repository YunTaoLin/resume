<template>
    <div class="warp">
        <div class="banner"></div>
        <Update data_url='https://script.google.com/a/gapp.fju.edu.tw/macros/s/AKfycbyeG3c8vQEPB9N_Xcjx_-ryR1qR2wC1rdjf2ISf/exec' title="Component Design" />
    </div>
</template>

<script>
import Update from '@/components/Updata.vue'
export default {
    name:'Fullpage',
    components:{
        Update
    }
}
</script>

<style lang="scss" scoped>
body{
    overflow: hidden;
}
.warp{
    // width: 100%;
    // height: 90vh;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans TC', '微軟正黑體';
     .banner{
        position: absolute;
        top: 0;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-size: cover;
        background:url('../../assets/bg5.jpg') no-repeat center center / 100% 100% ;
    }
}



</style>