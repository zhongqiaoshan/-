import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


const router =  new VueRouter({
    // linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: () => import('../components/HelloWorld.vue'),
            redirect:'/moveislist/bottom',
            children: [
                {
                    path: 'moveislistes',
                    component: () => import('../components/moveisListes.vue'),
                    children: [{
                        path: 'bottom',
                        component: () => import('../components/bottom.vue'),
                    }]
                },
                {
                    path: 'moveislist',
                    component: () => import("../components/moveisList.vue"),
                    children: [{
                        path: 'bottom',
                        component: () => import('../components/bottom.vue'),
                    }]
                },
            ]
        },
        {
            path: '/cinemas',
            component: () => import("../components/cinemas.vue"),
            children: [{
                path: 'bottom',
                component: () => import('../components/bottom.vue'),
            }]
        }, {
            path: '/favorable',
            component: () => import('../components/favorable.vue'),
            children: [{
                path: 'bottom',
                component: () => import('../components/bottom.vue'),
            }]
        },
        {
            path: '/login',
            component: () => import("../components/login.vue"),
            children: [{
                path: 'bottom',
                component: () => import('../components/bottom.vue'),
            }]
        },
        {
            path:'/filmDetail/:id',
            component:() => import("../components/filmDetail.vue")
        },
        {
            path:'/city',
            component:() => import("../components/citys.vue")
        },{
            path:'/register',
            component:() => import("../components/register.vue")
        },{
            path:'/cinemasDetail/:id',
            component:() => import("../components/cinemasDetail.vue")
        },{
            path:'/filmDetailImg/:id',
            component:() => import("../components/filmDetail-img.vue")
        },
        {
            path:"/cinemasSeach/:id",
            component:() => import("../components/cinemasSerach.vue")
        }
    ]
})


export default router
