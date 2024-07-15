import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/drag',
            name: 'drag',
            component: () => import('@/views/drag/index.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/index.vue')
        },
        {
            path: '/main-content',
            name: 'main-content',
            component: () => import('@/views/main-content/index.vue'),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('@/views/home/index.vue')
                },
                {
                    path: 'searchUser',
                    name: 'searchUser',
                    component: () => import('@/views/chatSystem/searchUser/index.vue')
                },
                {
                    path: 'friendRequest',
                    name: 'friendRequest',
                    component: () => import('@/views/chatSystem/friendRequest/index.vue')
                },
                {
                    path: 'friendList',
                    name: 'friendList',
                    component: () => import('@/views/chatSystem/friendList/index.vue')
                },
                {
                    path: '/main-content/:afterUser(.*)',
                    component: import('@/views/found/index.vue')
                }
            ]
        }
    ],
})
export default router