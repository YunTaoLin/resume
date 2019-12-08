<template>
   <transition name="loading">
        <div class="loading" v-if="loading">
          Loading...
          <div class="inner-load">
              <svg>
                  <rect id="loading-rect"></rect>
              </svg>
          </div>
        </div>
    </transition>
</template>

<script>
export default {
 props:{loading:{
   type: Boolean,
   default:false
 }}
   
}
</script>

<style lang="scss" scoped>
// -------start Loading動畫----------
.loading{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background:url('../assets/bg2.jpg')  top center , #191E21;
  background-size: cover;
  color: #fefefe;
  z-index: 998;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: 700;
  .inner-load{
    margin: 20px;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
  }
}
svg {
  width: 100px;
  height: 100px;
  rect {
        width: 100px;
        height: 100px;
        fill: none;
        stroke: #327BBD;
        stroke-width: 100px;
        stroke-dashoffset: 50%;
        stroke-dasharray: 100;
        transition: 2s;
        animation: animate 1s linear infinite;
    }
  &:hover rect {
        stroke: #ff0;
    }
}
@keyframes animate {
    to {
        stroke-dashoffset: 250%;
    }
}

.loading-leave-active{
  transition: 1s;
}
.loading-leave-to{
  opacity: 0;
}
// --------end Loading動畫--------------------------
</style>