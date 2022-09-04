import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MsCombobox from "ms-combobox"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Paginate from 'vuejs-paginate'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


import mitt from 'mitt';               
const emitter = mitt();                  

const app = createApp(App);
app.use(ElementPlus)
app.use(router).mount('#app');

app.config.globalProperties.emitter = emitter;
app.component("MsCombobox", MsCombobox);
app.component('MsPaginate', Paginate);
app.component('MsDatepicker', Datepicker);