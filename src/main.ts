import Vue from 'vue';
import App from './App.vue';
import Reveal from './directives/reveal';

import './styles/global.scss';

Vue.directive('reveal', Reveal);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');
