<<<<<<< HEAD
const routers = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    }
];
=======
/**
 * Created by aresn on 16/8/22.
 */
const routers = {
    '/index': {
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    }
};
>>>>>>> 4299aad78d0e0dd2072f53edf827a9d6b7421cc0
export default routers;