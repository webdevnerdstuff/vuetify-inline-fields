import '@/libraries/fontawesome';
import PlaygroundApp from './PlaygroundApp.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from '../../plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { makeServer } from '../../server';
import { createVInlineFields } from '../../plugin/index';
// import {
// 	VInlineCheckbox,
// 	VInlineCustomField,
// 	VInlineSelect,
// 	VInlineSwitch,
// 	VInlineTextField,
// 	VInlineTextarea,
// } from '../../plugin/index';

makeServer({ environment: 'playground' });

const app = createApp(PlaygroundApp);
app.use(createVInlineFields({
	// cell: true,
}));
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);

// app.component('VInlineCheckbox', VInlineCheckbox);
// app.component('VInlineCustomField', VInlineCustomField);
// app.component('VInlineSelect', VInlineSelect);
// app.component('VInlineSwitch', VInlineSwitch);
// app.component('VInlineTextField', VInlineTextField);
// app.component('VInlineTextarea', VInlineTextarea);

registerPlugins(app);

app.mount('#app');
