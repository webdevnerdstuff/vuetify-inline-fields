import '@/libraries/fontawesome';
import App from './App.vue';
import CodeBlock from 'vue3-code-block';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from './plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import * as VInlineFields from './index';
import { makeServer } from './server';

makeServer({ environment: 'demo' });

const app = createApp(App);
app.use(CodeBlock);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);

for (const prop in VInlineFields) {
	app.component(prop, VInlineFields[prop]);
}

registerPlugins(app);

app.mount('#app');
