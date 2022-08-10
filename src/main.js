import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MsCombobox from "ms-combobox"

import mitt from 'mitt';               
const emitter = mitt();                  

const app = createApp(App);
app.use(router).mount('#app');

app.config.globalProperties.emitter = emitter;
app.component("MsCombobox", MsCombobox);