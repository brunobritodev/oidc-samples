/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router';
import router from './router'
import App from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Mgr from './services/SecurityService';

Vue.use(VueRouter);
let mgr = new Mgr();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const checkRole = to.matched.some(record => record.meta.role != null && record.meta.role.length > 0);
  if (requiresAuth) {

    if (checkRole) {
      mgr.getRole().then(
        sucess => {
          if (to.meta.role == sucess) {
            next();
          } else {
            next('/accessdenied');
          }
        },
        err => {
          console.log(err);
        }
      );
    } else {

      mgr.getSignedIn().then(sucess => {
        if (sucess) {
          next();
        } else {
          next('/accessdenied');
        }
      },
        err => {
          console.log(err);
        });
    }

  } else {
    next();
  }
});
