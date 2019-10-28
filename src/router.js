import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Message from './views/Message.vue'
import Portfolio from './views/Works.vue'
import updataFullpage from './views/updata/up_Fullpage.vue'
import updataMultipage from './views/updata/up_Multipage.vue'
import updataPractical from './views/updata/up_Practical.vue'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/portfolio',
            name: 'Works',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Portfolio
        },
        {
            path: '/works/updataFullpage',
            name: 'updataFullpage',
            component: updataFullpage
        },
        {
            path: '/works/updataPractical',
            name: 'updataPractical',
            component: updataPractical
        },
        {
            path: '/works/updataMultipage',
            name: 'updataMultipage',
            component: updataMultipage
        },
        {
            path: '/message',
            name: 'Message',
            component: Message
        }

    ]
})