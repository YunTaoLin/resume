<template>
    <div class="warp">
        <div class="banner"></div>
        <Update data_url='https://script.google.com/macros/s/AKfycbz32Dm9svOAHCGziwUm9JmLUZEX6srfBz9X90j92E5akBbc875b/exec' title="Fullpage web" />
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
        background:url('../../assets/bg3.jpg') no-repeat center center / 100% 100% ;
    }
}



</style>