import '@/libraries/fontawesome';
import PlaygroundApp from './PlaygroundApp.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from '../../plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { makeServer } from '../../server';
import * as VInlineFields from '../../index';

makeServer({ environment: 'playground' });

const app = createApp(PlaygroundApp);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);

for (const prop in VInlineFields) {
	app.component(prop, VInlineFields[prop]);
}

registerPlugins(app);

app.mount('#app');
