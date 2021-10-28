import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
    {
        path: '/china',
        name: 'china',
        component: () => import('@/pages/echarts/china')
    },
    {
        path: '/marquee',
        name: 'home',
        component: () => import('@/components/marquee')
    },
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/home')
    },
    {
        path: '/t/:id/:color',
        name: 'test',
        component: () => import('@/components/test')
    },
    {
        path: '/drag',
        name: 'drag',
        component: () => import('@/components/drag')
    }, {
        path: '/canvas',
        name: 'canvas',
        component: () => import('@/components/canvas')
    }, {
        path: '/snake',
        name: 'snake',
        component: () => import('@/pages/snake/snake')
    }, {
        path: '/echarts',
        name: 'echarts',
        component: () => import('@/pages/echarts/echarts')
    }, {
        path: '/slot',
        name: 'slot',
        component: () => import('@/pages/slots/slots')
    }, {
        path: '/around', 
        name: 'around',
        component: () => import('@/pages/around/around'),
        children: [
            {
                path: '/fruits',
                name: 'fruits',
                component: () => import('@/pages/around/component/fruits')
            },
            {
                path: '/cars',
                name: 'cars',
                component: () => import('@/pages/around/component/cars')
            },
            {
                path: '/cigarette',
                name: 'cigarette',
                component: () => import('@/pages/around/component/cigarette')
            },
            {
                path: '/games',
                name: 'games',
                component: () => import('@/pages/around/component/games')
            }
        ]
    }
]
routes.push();
const router = new Router({ routes })

router.beforeEach((to, from, next) => {
    next()
})

export default router