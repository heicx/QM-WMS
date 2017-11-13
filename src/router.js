import OrderSearch from './views/order/OrderSearch.vue'
import OrderExport from './views/order/OrderExport.vue'

import AccountCreate from './views/account/AccountCreate.vue'
import AccountUpdate from './views/account/AccountUpdate.vue'

import UserSearch from './views/user/UserSearch.vue'

import Commnets from './views/website/Comments.vue'
import News from './views/website/News.vue'
import Video from './views/website/Video.vue'


const routers = [
    {
        path: '/',
        meta: {
            title: '首页'
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
            title: '订单导出'
        },
        component: OrderExport
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
    }
];

export default routers;
