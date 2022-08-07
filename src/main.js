import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ManhCombobox from "ms-combobox"

import mitt from 'mitt';               
const emitter = mitt();                  

const app = createApp(App);
app.use(router).mount('#app');

app.config.globalProperties.emitter = emitter;
app.component("ManhCombobox", ManhCombobox);