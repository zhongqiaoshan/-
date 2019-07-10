// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Swiper from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import { Button, Tabbar, Tab, Tabs, Loading,Toast,List ,PullRefresh,DropdownMenu, DropdownItem ,ImagePreview} from 'vant'
import 'vant/lib/index.css';
import vuex from 'vuex';
import store from "./store";
import citys from "./components/citys.vue"

Vue.use(vuex);
Vue.use(VueAwesomeSwiper);
Vue.use(Button).use(Tabbar);
Vue.use(Tab).use(Tabs);
Vue.use(Loading);
Vue.use(Toast).use(List).use(PullRefresh);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(ImagePreview);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Swiper,
  store,
  components: { App ,citys},
  template: '<App/>'
})
