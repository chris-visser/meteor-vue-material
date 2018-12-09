import Vue from 'vue';

import DefaultLayout from './layouts/AdminLayout.vue';
import SecondaryLayout from './layouts/PublicLayout.vue';

Vue.component('default-layout', DefaultLayout);
Vue.component('secondary-layout', SecondaryLayout);
