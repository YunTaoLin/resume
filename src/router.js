import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
// import Message from './views/Message.vue'
import Works from './views/Works.vue'
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
            path: '/works',
            name: 'Works',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Works
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