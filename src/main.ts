import '@/libraries/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import CodeBlock from '@wdns/vue-code-block';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import { createVInlineFields } from './plugin/index';
import { registerPlugins } from './plugins';
import { makeServer } from './server';

makeServer({ environment: 'demo' });

const app = createApp(App);
app.component('CodeBlock', CodeBlock);
app.use(createVInlineFields());
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);

registerPlugins(app);

app.mount('#app');
