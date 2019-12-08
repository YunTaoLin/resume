import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
// import Message from './views/Message.vue'
// import Works from './views/Works.vue'
import Portfolio from './views/Portfolio.vue'
import Experience from './views/experience.vue'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/experience',
            name: 'Experience',
            component: Experience
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: Portfolio
        }

    ]
})