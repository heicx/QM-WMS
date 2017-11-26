import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import store from './store';
import Util from './libs/util';
import App from './app.vue';

import API from './libs/request';

import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    store.dispatch('isLogin').then(res => {
        if(!res.status) {
            if(to.name !== 'login') {
                router.replace({ path: '/login' });
            }
        }else {
            if(to.name === 'login') {
                router.replace({ path: '/order/search' });
            }
        }
    });

    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});
