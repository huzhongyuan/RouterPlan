import Vue from 'vue'
import Application from './Application'
import VueRouter from 'vue-router'
import {routes} from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
import 'es6-promise/auto'

Vue.use(ElementUI);
Vue.use(VueRouter);
Axios.defaults.baseURL = '/RoutePlanSystem';
Axios.defaults.withCredentials=true;
Vue.prototype.$axios = Axios;

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      return {x:0,y:0}
    }
  }
})

//路由守卫，检测是否已经登录
// router.beforeEach((to, from, next) => {
//   if(to.meta.requireLogin){ //如果前往页面需要登录
//     if(true){ //未登录
//       next('/login')//跳转到登录界面
//     }else{ //已登录
//       next();
//     }
//   }else{ //前往页面不需要登录
//     next();
//   }
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(Application)
})