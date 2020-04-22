<template>
    <div :id="id" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li :data-target="'#'+id"  :data-slide-to="index" :class="{active: index==0}" v-for="(item,index) in img" :key="item"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item" :class="{active: index==0}" v-for="(item,index) in img" :key="item">
          <img :src="item" class="d-block w-100" alt="輪播圖片">
        </div>
      </div>
      <a class="carousel-control-prev" :href="'#'+id" role="button" data-slide="prev">
        <div class="btn-box">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </div>
      </a>
      <a class="carousel-control-next" :href="'#'+id"  role="button" data-slide="next">
        <div class="btn-box">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </div>
      </a>
    </div>
</template>

<script>
import 'bootstrap'
export default {
  props:{
    img:{
      type:Array
    },
    id:{
      type:String
    }
  }

}
</script>

<style lang="scss" scoped>
.carousel-indicators{
  li.active{
    background-color: rgba(64, 75, 78, 0.52) !important;
    background-clip: padding-box !important;
    border-top: 10px solid transparent !important;
    border-bottom: 10px solid transparent !important;
    box-shadow: none !important;
  }
}

</style>