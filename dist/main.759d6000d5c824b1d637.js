webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	(function webpackMissingModule() { throw new Error("Cannot find module \"babel-polyfill\""); }());
	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	import Vue from 'vue';
	import iView from 'iview';
	import VueRouter from 'vue-router';
	import Routers from './router';
	import Util from './libs/util';
	import App from './app.vue';
	
	import 'iview/dist/styles/iview.css';
	
	Vue.use(VueRouter);
	Vue.use(iView);
	
	// 路由配置
	const RouterConfig = {
	    mode: 'history',
	    routes: Routers
	};
	const router = new VueRouter(RouterConfig);
	
	router.beforeEach((to, from, next) => {
	    iView.LoadingBar.start();
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
	    render: h => h(App)
	});


/***/ })
]);