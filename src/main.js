import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
import VueParallaxJs from 'vue-parallax-js'

Vue.config.productionTip = false
Vue.use(VueParallaxJs)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')