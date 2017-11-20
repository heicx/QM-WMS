import OrderSearch from './views/order/OrderSearch.vue'
import OrderExport from './views/order/OrderExport.vue'
import OrderImport from './views/order/OrderImport.vue'
import ExpressSearch from './views/order/ExpressSearch.vue'

import AccountCreate from './views/account/AccountCreate.vue'
import AccountUpdate from './views/account/AccountUpdate.vue'

import UserSearch from './views/user/UserSearch.vue'

import Commnets from './views/website/Comments.vue'
import News from './views/website/News.vue'
import Video from './views/website/Video.vue'

import Main from './views/main.vue';

const routers = [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'QMY - 登录'
        },
        component: resolve => { require(['./views/Login.vue'], resolve); }
    },
    {
        path: '/',
        name: 'otherRouter',
        component: Main,
        children: [
            {
                path: '/home',
                meta: {
                    title: 'QMY'
                },
                component: (resolve) => require(['./views/index.vue'], resolve)
            },
            {
                path: '/order/search',
                meta: {
                    title: '订单查询'
                },
                component: OrderSearch
            },
            {
                path: '/order/export',
                meta: {
                    title: '订单发货'
                },
                component: OrderExport
            },
            {
                path: '/order/import',
                meta: {
                    title: '订单更新'
                },
                component: OrderImport
            },
            {
                path: '/order/express',
                meta: {
                    title: '快递查询'
                },
                component: ExpressSearch
            },
            {
                path: '/account/create',
                meta: {
                    title: '创建账户'
                },
                component: AccountCreate
            },
            {
                path: '/account/update',
                meta: {
                    title: '修改账户'
                },
                component: AccountUpdate
            },
            {
                path: '/user/search',
                meta: {
                    title: '用户查询'
                },
                component: UserSearch
            },
            {
                path: '/web/News',
                meta: {
                    title: '新闻编辑'
                },
                component: News
            },
            {
                path: '/web/video',
                meta: {
                    title: '视频编辑'
                },
                component: Video
            },
            {
                path: '/web/comment',
                meta: {
                    title: '用户评论'
                },
                component: Commnets
            },
            {
                path: '/*',
                meta: {
                    title: 'QMY'
                },
                component: (resolve) => require(['./views/index.vue'], resolve)
            }
        ]
    }
];

export default routers;
