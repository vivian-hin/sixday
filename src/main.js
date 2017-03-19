// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'

// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

import Vue from 'vue';
import AMap from 'vue-amap';

import App from './App.vue';
import router from './router';

Vue.use(AMap);
AMap.initAMapApiLoader({
  key: 'YOUR_KEY',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType']
});

const app = new Vue({  // eslint-disable-line
  router,
  render: h => h(App)
}).$mount('#app');