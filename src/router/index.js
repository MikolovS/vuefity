import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/content/Content'
import {auth} from '@/services/auth'

import home from '@/components/home/home.router'
import qwerty from '@/components/qwerty/qwerty.router'
import blog from '@/components/blog/blog.router'
import instagram from '@/components/instagram/instagram.router'

let appRoutes = [...home, ...qwerty, ...blog, ...instagram];

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/',
            component: Content,
            children: appRoutes,
        },
        // {
        //     path: '/login',
        //     name: 'Login',
        //     component: Login,
        //     meta: {title: 'Puzzland CMS'}
        // }
    ]
});

// const isLogin = auth.isAuthenticated();
const isLogin = true;

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
    // if(to.path !== '/login' && !isLogin) {
    //     next('/login')
    // } else if (to.path === '/login' && isLogin) {
    //     next({
    //         path: '/'
    //     })
    // } else {
    //     next()
    // }
});

export default router
